# liri-node-app

I included my terminal commands for the following:

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


    in the Images(Screenshots) folder.

    - i was able to get concert-this to work.
    - i was able to get spotify-this-song to work except the artist name.
    - i was unable to get anything done with movie-this, despite multiple attempts. No idea why its not working.
    - i was able to get do-what-it-says to work.
    - i was able to get default to work if something is types that it doesnt recognize.
