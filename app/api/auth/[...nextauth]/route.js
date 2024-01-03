import spotifyApi, { LOGIN_URL } from "@/lib/spotify";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
const refreshAccessToken = async (token) => {
  //refreshing access token
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("refresh token:", refreshedToken);
    return {
      ...token,
      accessToken: refreshAccessToken.accessToken,
      accessTokenExpires: Date.now + refreshAccessToken.expires_in * 1000, // = 1hour, spotify returns 3600ms normally, sp 3600 * 1000
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
    
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
  
};

const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET ,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };

      }
      // if access token has not expired
      if (Date.now() < token.accessTokenExpires ) {
        console.log("TOKEN IS VALID");
        return token;
      }

      //if access token has expired
      console.log("TOKEN EXPIRED, refreshing ...");
      return await refreshAccessToken(token);
    },
    async session({session, token}) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };