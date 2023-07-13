/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { getDateAndTime } from "../utility/utility";

const EventCard = ({currentEvent}) => {
    const {eventThumbnail,eventStartTime,title,eventType,id}=currentEvent
    return (
        <Link to={`/event/${id}`} className="relative m-8 rouded-md">
            <p className="absolute px-2 py-1 text-sm text-gray-800 capitalize bg-white rounded-md top-4 left-2">{eventType} Event</p>
            <img src={eventThumbnail} alt={title} className="rounded-md h-60 w-60" />
            <small className="text-xs text-gray-600">{getDateAndTime(eventStartTime)} IST </small>
            <p className="text-lg text-gray-800 text-bold">{title}</p>
        </Link>
    );
};

export default EventCard;