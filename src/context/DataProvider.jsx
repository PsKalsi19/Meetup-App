/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import data from "./../db/data";
import ACTIONS from "./ProjectActions";

const initialState = {
  eventsData: data,
  selectedEventType: "both",
  searchText: "",
  selectedEvent: {},
};

const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_EVENT_TYPE:
      return { ...state, selectedEventType: payload };

    case ACTIONS.SET_SEARCH:
      return { ...state, searchText: payload };

    case ACTIONS.SET_SELECTED_EVENT:
      return { ...state, selectedEvent: payload };

    default:
      return state;
  }
};

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [projectData, dispatchProjectData] = useReducer(
    projectReducer,
    initialState
  );

  return (
    <DataContext.Provider value={{ projectData, dispatchProjectData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
