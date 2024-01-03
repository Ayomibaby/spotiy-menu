// import NextAuth from "next-auth";
// import SpotifyProvider from "next-auth/providers/spotify";

// const scopes = [
//   "user-top-read",
//   "user-read-recently-played",
//   "user-read-email",
// ].join(",");

// const params = {
//   scope: scopes,
// };

// const query = new URLSearchParams(params);

// const LOGIN_URL = "https://accounts.spotify.com/authorize?" + query.toString();

// const refreshAccessToken = async (token) => {
//   //refreshing access token
// };

// export const authOptions = {
//   providers: [
//     SpotifyProvider({
//       authorization: LOGIN_URL,
//       clientId: process.env.SPOTIFY_CLIENT_ID,
//       clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     }),
//   ],
//   // callbacks: {
//   //   async jwt({ token, account }) {
//   //     //persist oautha accesstoken
//   //     if (account) {
//   //       token.accessToken = account.access_token;
//   //       token.refresh.token = account.refresh_token;
//   //       token.accessTokenExpires = account.expires_at;

//   //       return token;
//   //     }
//   //     // if access token has not expired
//   //     if (Date.now() < token.accessTokenExpires * 1000) {
//   //       return token;
//   //     }

//   //     //if access token has expired
//   //     return refreshAccessToken(token);
//   //   },
//   //   async session(session, user, token) {
//   //     session.accessToken = token.accessToken;
//   //     return session;
//   //   },
//   // },
// };
