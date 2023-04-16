import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core"
import popularMoviesReducer from "./PopularMovies/popularMoviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;