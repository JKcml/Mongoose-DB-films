const MovieCollection = require("./model")

async function createMovie(movieObject) {
    try {
        console.log(movieObject);
        const newMovie = await MovieCollection.create(movieObject);
        console.log (newMovie);
    } catch (error) {
        console.log(error)
    }
};

async function readMovies () {
    try {
        console.log("readMovies")
        const readMovie = await MovieCollection.find({});
        for (let index = 0; index < readMovie.length; index++) {
            const element = readMovie[index];
            console.log(`film=${element.title} director=${element.director} actor=${element.actor} rating=${element.rating}`);
        }
        // console.log(readMovie)
    } catch (error) {
        console.log(error)
    }
};

async function updateMovie (title, newTitle, actor, director, rating) {
    try {
        const myQuery = {title: title};

        const update = {title: newTitle, 
                        actor: actor, 
                        director: director, 
                        rating: rating 
                    };

        const updateResult = await MovieCollection.replaceOne(myQuery, update);
        console.log(updateResult);

    } catch (error) {
        console.log(error);
        
    }
};

async function deleteMovie (title) {
    try {
        const myQuery = { title: title };
        const deleteResult = await MovieCollection.deleteOne(myQuery);
        console.log(deleteResult);        
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = {createMovie, readMovies, updateMovie, deleteMovie};