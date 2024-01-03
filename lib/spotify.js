import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-top-read",
  "user-read-recently-played",
  "user-read-email",
].join(",");

const params = {
  scope: scopes,
};

const query = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${query.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});


export default spotifyApi;
