require ('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose'); //node --trace-deprecation ...
const {createMovie, readMovies, updateMovie, deleteMovie } = require('./movies/function');




async function app(yargsinput) {
    if (yargsinput.create) {
        // put code here for create
        console.log(yargsinput.director)
        await createMovie({
            title: yargsinput.title, 
            actor: yargsinput.actor, 
            director: yargsinput.director, 
            rating: yargsinput.rating});

    } else if (yargsinput.read) {
        console.log("Reading database");
        // code for list all movies
        await readMovies();

    } else if (yargsinput.update) {
        console.log("Updating database");
        //code here for updating actor
        console.log(yargsinput.title, yargsinput.newTitle, yargsinput.actor, yargsinput.director, yargsinput.rating)
        await updateMovie (yargsinput.title, yargsinput.newTitle, yargsinput.actor, yargsinput.director, yargsinput.rating)

    } else if (yargsinput.delete) {
        console.log("Deleting data")
        //code for deleting a movie
        await deleteMovie (yargsinput.title);
        
    } else {
        console.log("Unrecognised option")
    }
    await mongoose.disconnect(); //node --trace-deprecation ...
}

app(yargs.argv);