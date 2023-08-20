// The `configureStore` function is used to create the Redux store. It takes a
// single argument, which is an object that contains the reducers for the store.
// The `articleApi` reducer is used to create the store.
import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

/**
 * @description
    This function creates a store object using the configureStore function from the Redux Toolkit library.
    The configureStore function takes a configuration object as its only parameter. In the configuration object, we pass an object with a single key-value pair, where the key is the value returned by invoking the reducerPath method on the articleApi object imported from the @reduxjs/toolkit/query library, and the value is the value returned by invoking the reducer method on the articleApi object.
    The reducerPath method returns the name of the reducer path, which is the value returned by the getEndpointName method on the articleApi object.
    The reducer method returns a reducer function created using the createReducer function from the Redux Toolkit library. The createReducer function takes an initial state as its first parameter, and an object whose keys are action types and whose values are reducer functions as its second parameter. In our case, we are passing an empty object as the second parameter, which means that we are passing an empty object as the first parameter to the createReducer function.
    The createReducer function returns a reducer function that returns the provided initial state if the action type is not found in the provided object, and returns the value returned by invoking the reducer function associated with the action type if the action type is found in the provided object.
    The reducer function associated with the action type is created using the createReducer function from the Redux Toolkit library. The createReducer function takes an initial state as its first parameter, and an object whose keys are action types and whose values are reducer functions as its second parameter. In our case, we are passing an empty object as the second parameter, which means that we are passing an empty object as the first parameter to the createReducer function.
 */
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
