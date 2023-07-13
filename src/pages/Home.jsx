import { useContext } from "react";
import { DataContext } from "./../context/DataProvider";
import EventSelect from "./../components/EventSelect";
import EventCard from "./../components/EventCard";

const Home = () => {
  const {
    projectData: {
      eventsData: { meetups },
      selectedEventType,
      searchText,
    },
  } = useContext(DataContext);
  
  const filterMeetups=()=>{
    const byType= selectedEventType==='both'?meetups:meetups.filter(events=>events.eventType===selectedEventType);

    if(searchText==='') return byType
   return byType.filter(ele=>ele.title.toLowerCase().includes(searchText.toLowerCase()) || ele.eventTags.toString().toLowerCase().includes(searchText.toLowerCase()))
  }
  return (
    <div>
      <div className="flex justify-between px-32 py-4 border-b border-gray-300">
        <h3 className="text-4xl font-extrabold text-gray-800">Meetup Events</h3>
        <EventSelect />
      </div>
      <div className="flex flex-wrap justify-center ">
        {meetups &&
          meetups.length > 0 &&
          filterMeetups().map((ele) => <EventCard key={ele.id} currentEvent={ele} />)}
      </div>
    </div>
  );
};

export default Home;
