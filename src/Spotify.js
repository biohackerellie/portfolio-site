var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientID: 'b1c7b41594154b90a8abc04d1835433f',
    clientSecret: '965dc02eb85c4b999c870b3fb2b8a490',
    redirectUri: 'https://portfolio.epklabs.com'
});

spotifyApi.setAccessToken('<your_access_token>');

spotifyApi.getArtistAlbums('08L1KXlcNM4yeUftTjTRoA').then(
    function(data) {
      console.log('Artist albums', data.body);
    },
    function(err) {
      console.error(err);
    }
  );