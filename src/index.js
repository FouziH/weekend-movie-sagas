import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_MOVIE_DETAILS_ALL_GENRES', getMovieDetailsAllGenres)

}

function* getMovieDetailsAllGenres(action) {
    try{
        const response = yield axios.get(`/api/movie/${action.payload}`)
        console.log("getMovieDetailsAllGenres GET request is", response.data);

        yield put({type:'MOVIE_DETAILS_PLUS_GENRES',payload: response.data })
    }
    catch{

    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const getMovieDetailsAndGenres = (state =[], action) => {
    switch(action.type) {
        case 'MOVIE_DETAILS_PLUS_GENRES':
            console.log("MOVIE_DETAILS_PLUS_GENRES", action.payload);
            return action.payload;
        default:
            return state

    }
}



// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    getMovieDetailsAndGenres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
