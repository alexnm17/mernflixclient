import API from './api';

export {
    getAllMovies,
    addNewBookmark,
    getSingleMovie,
    getMyBookmarks,
    deleteBookmark
}

function getAllMovies() {
    return API.get('/movies').then(res => res.data);
}

function addNewBookmark(email, movie){
    return API.post('/bookmarks', {
        email,
        movie}).then(result => result.data);
}

function getSingleMovie(idmovie) {
    return API.get('/movies/'+idmovie).then(res => res.data);
 }

 function getMyBookmarks(email) {
    return API.get('/bookmarks/'+email).then(res => res.data);
}

function deleteBookmark(idbookmark) {
    return API.delete('/bookmarks/'+idbookmark).then(result => result.data);
}