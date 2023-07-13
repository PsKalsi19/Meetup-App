import { useContext } from "react";
import { DataContext } from "./../context/DataProvider";


const eventTypes=['both','Online','Offline']

import ACTIONS from "../context/ProjectActions";
const EventSelect = () => {
  const {
    projectData: { selectedEventType },
    dispatchProjectData,
  } = useContext(DataContext);

  return (
    <div>
      <select
        onChange={(e) =>
          dispatchProjectData({
            type: ACTIONS.SET_EVENT_TYPE,
            payload: e.target.value,
          })
        }
        className="px-4 py-2 capitalize border border-gray-200 rounded-md bg-gray-50"
        value={selectedEventType}
        name="event"
        id="event"
      >
      {
        eventTypes.map((ele,index)=><option key={index} value={ele} className="capitalize">{ele} </option> )
      }
      </select>
    </div>
  );
};

export default EventSelect;
