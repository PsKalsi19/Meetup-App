/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
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

    case ACTIONS.UPDATE_RSVPed:
      return {
        ...state,
        eventsData: setRSVP(state),
      };
    default:
      return state;
  }
};

const setRSVP = (state) => {
  const {
    eventsData: { meetups },
    selectedEvent,
  } = state;
  const updatedMeetups = meetups.map((ele) =>
    ele.id === selectedEvent.id ? { ...ele, isRSVPed: true } : ele
  );

  return {
    meetups: updatedMeetups,
  };
};

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [projectData, dispatchProjectData] = useReducer(
    projectReducer,
    initialState
  );

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false);
    dispatchProjectData({ type: ACTIONS.UPDATE_RSVPed, payload: true });
  };

  return (
    <DataContext.Provider
      value={{
        projectData,
        dispatchProjectData,
        showModal,
        setShowModal,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
