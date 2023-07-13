import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./../context/DataProvider";
import ACTIONS from "../context/ProjectActions";
import { getDateAndTime } from "../utility/utility";
const Event = () => {
  const { id } = useParams();

  const {
    projectData: {
      eventsData: { meetups },
      selectedEvent,
    },
    setShowModal,
    dispatchProjectData,
  } = useContext(DataContext);

  const isEventAvailable = new Date(selectedEvent?.eventEndTime) > new Date();
  useEffect(() => {
    dispatchProjectData({
      type: ACTIONS.SET_SELECTED_EVENT,
      payload: meetups.find((ele) => ele.id === id),
    });
  }, [id, meetups, dispatchProjectData]);
  return (
    <div>
      {selectedEvent && Object.keys(selectedEvent).length > 0 && (
        <>
          <div className="grid grid-cols-4 px-32 py-4">
            <div className="flex flex-col space-y-4 md:col-span-3">
              <h3 className="text-4xl font-extrabold text-gray-800">
                {selectedEvent?.title}
              </h3>
              <p className="text-gray-600">Hosted by:</p>
              <p className="text-gray-800">{selectedEvent?.hostedBy}</p>
              <img
                className="h-80 w-96"
                src={selectedEvent?.eventThumbnail}
                alt={selectedEvent?.title}
              />
              <h3 className="text-2xl font-semibold text-gray-800">Details:</h3>
              <p className="text-gray-800">{selectedEvent?.eventDescription}</p>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Additional Information:
                </h3>
                <p className="text-gray-800">
                  <span className="mr-2 font-semibold">Dress Code:</span>
                  {selectedEvent?.additionalInformation?.dressCode}{" "}
                </p>
                <p className="text-gray-800">
                  <span className="mr-2 font-semibold">Age Restriction:</span>
                  {selectedEvent?.additionalInformation?.ageRestrictions}{" "}
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Event Tags:
              </h3>
              <div className="flex flex-row space-x-8">
                {selectedEvent?.eventTags.map((ele) => (
                  <p
                    key={ele}
                    className="px-4 py-2 bg-red-400 rounded-md text-gray-50"
                  >
                    {ele}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full md:col-span-1">
              <div className="flex flex-col w-full p-4 space-y-4 bg-white shadow-sm">
                <div className="flex flex-row items-center space-x-4">
                  <svg
                    fill="none"
                    className="w-8 h-8 text-gray-500"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {getDateAndTime(selectedEvent?.eventStartTime)} -{" "}
                  {getDateAndTime(selectedEvent?.eventEndTime)}
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <svg
                    fill="none"
                    className="w-6 h-6 text-gray-500"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {selectedEvent?.address}
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <svg
                    fill="none"
                    className="w-6 h-6 text-gray-500"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {selectedEvent?.price}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Speakers:
                </h3>
                <div className="flex">
                  {selectedEvent?.speakers.map((ele) => (
                    <div
                      key={ele.name}
                      className="flex flex-col items-center justify-center px-2 py-4 m-4 bg-white shadow-xl"
                    >
                      <img
                        className="w-16 h-16 rounded-full"
                        src={ele.image}
                        alt={ele.name}
                      />
                      <p className="w-full font-semibold text-center">
                        {ele.name}
                      </p>
                      <p className="text-sm text-center">{ele.designation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {isEventAvailable && (
                <button
                disabled={selectedEvent.price!=='Free'}
                  onClick={()=>setShowModal(true)}
                  className={`w-full px-6 py-2 my-8 rounded-md hover:bg-red-500 text-gray-50 ${selectedEvent.price!=='Free'? 'bg-red-200 cursor-not-allowed':'bg-red-400'}`}
                >
                  {selectedEvent.isRSVPed ? "Already RSVPed" : " RSVP"}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Event;
