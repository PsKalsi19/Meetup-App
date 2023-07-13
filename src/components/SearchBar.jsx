import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import ACTIONS from "../context/ProjectActions";

const SearchBar = () => {
  const {
    projectData: { searchText },
    dispatchProjectData,
  } = useContext(DataContext);

  return (
    <div className="fixed w-9/12 md:w-3/4 sm:top-4 md:top-20 lg:top-4 lg:w-96">
      <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 sm:text-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          value={searchText}
          className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
          onChange={(event) =>
            dispatchProjectData({
              type: ACTIONS.SET_SEARCH,
              payload: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default SearchBar;
