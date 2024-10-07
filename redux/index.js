import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./authSlice"; // Import your auth slice
import { combineReducers } from "redux";

// Create the persist configuration
const persistConfig = {
  key: "root", // Key for the root reducer
  storage, // Storage method (localStorage)
};

// Combine the reducers if you have multiple, or just use a single reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
