// import React, { useState, useEffect, useMemo } from 'react';


// export const Test = () => {
//   return (
//     <div>
//       <p className='text-white'>
//         Minima maxime dignissimos iure quas eveniet consectetur nihil fuga rem nam ad veniam, animi tenetur sapiente omnis soluta deleniti optio inventore sequi nemo ab! Libero rem aliquid praesentium vel fugiat?
//         Ullam velit voluptates labore, id magnam explicabo mollitia aperiam dolores adipisci necessitatibus quam quis impedit rerum dolor quos repellat. Veniam nam ducimus deleniti facilis beatae? Nam odio corrupti ipsam neque.
//         Quisquam libero voluptas recusandae, porro accusamus nemo aut, dicta rem, ipsa ducimus fugiat necessitatibus perferendis? Recusandae non, aperiam aut voluptas soluta porro, ad ipsam natus veniam in architecto reiciendis. Dignissimos!
//         Nisi quidem dignissimos saepe sunt ullam provident veritatis, itaque similique voluptatibus dolores quia culpa nihil, explicabo accusamus sit doloribus voluptate totam laudantium optio harum repellat cum minima earum accusantium! Quod.
//         Corporis quas illo placeat maiores error quibusdam pariatur repellat sit minima, tenetur nobis deserunt ipsa cupiditate magnam aliquam beatae necessitatibus ratione! Quas accusamus delectus quae harum, dolorem similique incidunt quaerat.
//         Ipsum modi, distinctio nulla ex placeat dignissimos, repudiandae quam vero at itaque quae perspiciatis velit fuga veniam explicabo architecto iure ad assumenda ratione sapiente inventore reprehenderit. Consectetur facilis voluptatum quisquam.
//         Earum, incidunt voluptatum accusantium neque possimus assumenda numquam accusamus, rerum natus hic tempore sunt eum et! Cumque nobis dolores inventore illum in molestiae expedita ipsum, saepe similique esse, tempora consectetur!
//         Vitae eius beatae voluptatibus? Cum hic, labore maxime dignissimos iste dicta aperiam quos, magni sunt praesentium, amet voluptates accusantium vel illum. Aut quisquam debitis magni natus. Molestias rem omnis magnam?
//         Incidunt a excepturi aliquam nobis officiis. In distinctio odit id! Aut ad, ut repellendus esse minima dignissimos neque reprehenderit a rem, deserunt nemo et. Id quas quod eos. Explicabo, aperiam?
//       </p>

//       <div className='mx-20 my-10'>
//         <Calender />
//       </div>
//     </div>
//   )
// }


// const Calender = ({ rowHeight = 150, columnWidth = 180, tableHeight }) => {
//   const backendEvents = [
//     {
//       "year": 2023,
//       "data": [
//         {
//           "id": 1,
//           "name": "January",
//           "data": [
//             {
//               "date": 1,
//               "events": [
//                 { "name": "New Year Celebration", "time": "00:00" },
//                 { "name": "Family Dinner", "time": "19:00" }
//               ]
//             },
//             {
//               "date": 15,
//               "events": [
//                 { "name": "Martin Luther King Jr. Day", "time": "09:00" },
//                 { "name": "Community Service", "time": "11:00" }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 2,
//           "name": "February",
//           "data": [
//             {
//               "date": 14,
//               "events": [
//                 { "name": "Valentine's Day", "time": "12:00" },
//                 { "name": "Charity Event", "time": "18:00" }
//               ]
//             },
//             {
//               "date": 28,
//               "events": [
//                 { "name": "End of Month Review", "time": "17:00" }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 12,
//           "name": "December",
//           "data": [
//             {
//               "date": 25,
//               "events": [
//                 { "name": "Christmas Day", "time": "10:00" },
//                 { "name": "Gift Exchange", "time": "14:00" }
//               ]
//             },
//             {
//               "date": 31,
//               "events": [
//                 { "name": "New Year's Eve Party", "time": "20:00" },
//                 { "name": "Fireworks", "time": "23:59" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "year": 2024,
//       "data": [
//         {
//           "id": 3,
//           "name": "March",
//           "data": [
//             {
//               "date": 17,
//               "events": [
//                 { "name": "St. Patrick's Day", "time": "12:00" },
//                 { "name": "Parade", "time": "15:00" }
//               ]
//             },
//             {
//               "date": 20,
//               "events": [
//                 { "name": "First Day of Spring", "time": "06:00" }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 7,
//           "name": "July",
//           "data": [
//             {
//               "date": 4,
//               "events": [
//                 { "name": "Independence Day", "time": "08:00" },
//                 { "name": "Fireworks", "time": "21:00" }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 11,
//           "name": "November",
//           "data": [
//             {
//               "date": 27,
//               "events": [
//                 { "name": "Aryan Birthday", "time": "18:00" },
//                 { "name": "Birthday Party", "time": "20:00" }
//               ]
//             },
//             {
//               "date": 28,
//               "events": [
//                 { "name": "Thanksgiving", "time": "12:00" },
//                 { "name": "Family Gathering", "time": "15:00" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "year": 2025,
//       "data": [
//         {
//           "id": 5,
//           "name": "May",
//           "data": [
//             {
//               "date": 1,
//               "events": [
//                 { "name": "Labor Day", "time": "09:00" }
//               ]
//             },
//             {
//               "date": 25,
//               "events": [
//                 { "name": "Memorial Day", "time": "10:00" },
//                 { "name": "Parade", "time": "13:00" }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 10,
//           "name": "October",
//           "data": [
//             {
//               "date": 31,
//               "events": [
//                 { "name": "Halloween", "time": "18:00" },
//                 { "name": "Costume Party", "time": "20:00" },
//                 { "name": "Trick or Treating", "time": "17:00" }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [events, setEvents] = useState({});
//   const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level

//   const timeSlots = useMemo(
//     () => Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`),
//     []
//   );

//   const getDaysInMonth = useMemo(() => {
//     return (year, month) => {
//       const date = new Date(year, month, 1);
//       const days = [];
//       while (date.getMonth() === month) {
//         days.push(new Date(date));
//         date.setDate(date.getDate() + 1);
//       }
//       return days;
//     };
//   }, []);

//   const generateEvents = useMemo(() => {
//     const generatedEvents = {};
//     backendEvents.forEach((yearData) => {
//       if (yearData.year === currentYear) {
//         yearData.data.forEach((monthData) => {
//           if (monthData.id === currentMonth + 1) {
//             monthData.data.forEach((dayData) => {
//               const dateKey = `${currentYear}-${currentMonth + 1}-${dayData.date}`;
//               generatedEvents[dateKey] = dayData.events.map((event) => ({
//                 time: event.time,
//                 description: event.name,
//               }));
//             });
//           }
//         });
//       }
//     });
//     return generatedEvents;
//   }, [currentYear, currentMonth]);

//   useEffect(() => {
//     setEvents(generateEvents);
//   }, [generateEvents]);

//   const goToPreviousMonth = () => {
//     setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
//     if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
//   };

//   const goToNextMonth = () => {
//     setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
//     if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
//   };

//   const daysInMonth = getDaysInMonth(currentYear, currentMonth);

//   // Zoom with mouse wheel handler
//   const handleWheel = (e) => {
//     e.preventDefault();
//     setZoomLevel((prev) => Math.min(Math.max(prev - e.deltaY * 0.001, 0.5), 2)); // Limit zoom between 0.5 and 2
//   };

//   const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 2));
//   const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));

//   return (
//     <div
//       className="calendar-wrapper min-h-full min-w-full bg-white overflow-auto"
//     >
//       <div className="calendar-header sticky top-0 flex justify-between items-center mb-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={goToPreviousMonth}
//         >
//           Previous Month
//         </button>
//         <h2 className="text-lg font-bold">
//           {`${new Date(currentYear, currentMonth).toLocaleString('default', {
//             month: 'long',
//             year: 'numeric',
//           })}`}
//         </h2>
//         <div className="zoom-controls flex gap-2">
//           <button
//             className="px-2 py-1 bg-gray-300 text-black rounded-md"
//             onClick={handleZoomOut}
//           >
//             Zoom Out
//           </button>
//           <button
//             className="px-2 py-1 bg-gray-300 text-black rounded-md"
//             onClick={handleZoomIn}
//           >
//             Zoom In
//           </button>
//         </div>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={goToNextMonth}
//         >
//           Next Month
//         </button>
//       </div>

//       <div className="calendar-content overflow-auto calendar-table" style={{ maxHeight: tableHeight || 'calc(100vh - 100px)' }}>
//         <table className="min-w-full table-fixed border-collapse calendar-table ">
//           <thead>
//             <tr>
//               <th className="w-20 bg-white text-center sticky left-0">Time</th>
//               {daysInMonth.map((date, index) => (
//                 <th
//                   key={index}
//                   className="h-[100px] bg-white p-2 border text-center"
//                   style={{ minWidth: `${columnWidth * zoomLevel}px` }}
//                 >
//                   {`${date.getDate()} ${date.toLocaleString('default', { weekday: 'short' })}`}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {timeSlots.map((time, idx) => (
//               <tr key={idx} style={{ height: `${rowHeight * zoomLevel}px` }}>
//                 <td className="min-w-[100px] text-center border border-gray-300 bg-white sticky left-0">
//                   {time}
//                 </td>
//                 {daysInMonth.map((date, index) => {
//                   const eventKey = `${currentYear}-${currentMonth + 1}-${date.getDate()}`;
//                   const event = events[eventKey]?.find((e) => e.time === time);
//                   return (
//                     <td
//                       key={index}
//                       className={`px-2 border border-gray-300 ${event ? 'bg-gray-100 font-semibold' : ''}`}
//                     >
//                       {event ? event.description : ''}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


import { DropDown, DropDownItem, DropDownMenu, DropDownTrigger } from '@/components/EFFECTS/DropDown/DropDown'
import React from 'react'

export const Test = () => {
  return (
    <DropDown>
      <DropDownTrigger>Click me</DropDownTrigger>
      <DropDownMenu>
        <DropDownItem>Item 1</DropDownItem>
        <DropDownItem>Item 2</DropDownItem>
        <DropDownItem>Item 3</DropDownItem>
      </DropDownMenu>
    </DropDown>
  )
}
