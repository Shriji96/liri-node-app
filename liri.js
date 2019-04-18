require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var omdbapi = require("omdbapi");



function getBand(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(response) {
            var jsonData = response.data;
            
            if (!jsonData.length) {
                console.log("Artist: " + artist + " not found.")
            return;
            }
            console.log("future concerts for " + artist + ":");
            for (var i = 0; i < jsonData.length; i++) {
                var shows = jsonData[i];
                console.log(
                    shows.venue.city + "," + (shows.venue.region || shows.venue.country) + " at " +
                    " " + 
                    moment(shows.datetime).format("MM/DD/YYYY") 
                );
            }
        }
    );
};
function getSpotify(song) {
    spotify
    .search ({ type: "track", query: song })
   .then(function(response) {
       /*console.log(response.tracks.items[0])*/
    var songs = response.tracks.items[0]
     
    console.log("artist: " + songs.artists);
    console.log("song name: " + songs.name);
    console.log("preview song: " + songs.preview_url);
    console.log("album: " + songs.album.name);
   }) 
   .catch(function(err) {
    console.log(err);
   });
 {

   }
};
function getMovie(movie) {
    omdbapi
    .search({ type: "movie", query: movie})
    .then(function(response) {
        console.log(response)
    })
    
}
function whatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
    });
};

var command = function(runData, functionData) {
    switch (runData) {
        case "concert-this":
        getBand(functionData);
        break;
        case "spotify-this-song":
        getSpotify(functionData);
        break;
        case "movie-this":
        getMovie(functionData);
        break;
        case "do-what-it-says":
        whatItSays();
        break;
        default:
        console.log("LIRI does not understand, please try again.");
    }
};
command(process.argv[2], process.argv.slice(3).join(" "));
