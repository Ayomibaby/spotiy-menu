import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const scopes =[
    "user-top-read",
    "user-read-recently-played",
    "user-read-email",
    "Get Current User's Profile",
].join(",")

const params ={
    scope: scopes
}

const query = new URLSearchParams(params)

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + query.to()

export const authOptions= {
  providers: [
    SpotifyProvider({
      authorization: LOGIN_URL,
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages:{
    signIn:"/"
  },
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
};