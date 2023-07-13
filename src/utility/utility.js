export const getDateAndTime=(data)=>{
const date = new Date(data);
const humanReadableDate = date.toLocaleDateString();
const dayOfWeek = date.getDay();
const timeOfDay = date.toLocaleTimeString();
return (`${dayOfWeek} ${humanReadableDate} . ${timeOfDay}`);

}