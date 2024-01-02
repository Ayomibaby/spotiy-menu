import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';


// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

const authOptions = {
    providers: [
        SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      })
    ],
  // Add your session configuration here
  session: {
    jwt: true,
  }
};
export default NextAuth(authOptions);
