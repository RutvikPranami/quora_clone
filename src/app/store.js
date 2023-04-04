import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/questionSlice";
import searchResultsReducer from "../features/searchResultslice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    SEARCHRESULTS :searchResultsReducer
    
  },
});
