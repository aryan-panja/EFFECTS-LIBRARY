import React, { useState, useEffect, useMemo } from 'react';

export const Calendar = () => {
  
  const backendEvents = [
    {
      "year": 2023,
      "data": [
        {
          "id": 1,
          "name": "January",
          "data": [
            {
              "date": 1,
              "events": [
                { "name": "New Year Celebration", "time": "00:00" },
                { "name": "Family Dinner", "time": "19:00" }
              ]
            },
            {
              "date": 15,
              "events": [
                { "name": "Martin Luther King Jr. Day", "time": "09:00" },
                { "name": "Community Service", "time": "11:00" }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "February",
          "data": [
            {
              "date": 14,
              "events": [
                { "name": "Valentine's Day", "time": "12:00" },
                { "name": "Charity Event", "time": "18:00" }
              ]
            },
            {
              "date": 28,
              "events": [
                { "name": "End of Month Review", "time": "17:00" }
              ]
            }
          ]
        },
        {
          "id": 12,
          "name": "December",
          "data": [
            {
              "date": 25,
              "events": [
                { "name": "Christmas Day", "time": "10:00" },
                { "name": "Gift Exchange", "time": "14:00" }
              ]
            },
            {
              "date": 31,
              "events": [
                { "name": "New Year's Eve Party", "time": "20:00" },
                { "name": "Fireworks", "time": "23:59" }
              ]
            }
          ]
        }
      ]
    },
    {
      "year": 2024,
      "data": [
        {
          "id": 3,
          "name": "March",
          "data": [
            {
              "date": 17,
              "events": [
                { "name": "St. Patrick's Day", "time": "12:00" },
                { "name": "Parade", "time": "15:00" }
              ]
            },
            {
              "date": 20,
              "events": [
                { "name": "First Day of Spring", "time": "06:00" }
              ]
            }
          ]
        },
        {
          "id": 7,
          "name": "July",
          "data": [
            {
              "date": 4,
              "events": [
                { "name": "Independence Day", "time": "08:00" },
                { "name": "Fireworks", "time": "21:00" }
              ]
            }
          ]
        },
        {
          "id": 11,
          "name": "November",
          "data": [
            {
              "date": 27,
              "events": [
                { "name": "Aryan Birthday", "time": "18:00" },
                { "name": "Birthday Party", "time": "20:00" }
              ]
            },
            {
              "date": 28,
              "events": [
                { "name": "Thanksgiving", "time": "12:00" },
                { "name": "Family Gathering", "time": "15:00" }
              ]
            }
          ]
        }
      ]
    },
    {
      "year": 2025,
      "data": [
        {
          "id": 5,
          "name": "May",
          "data": [
            {
              "date": 1,
              "events": [
                { "name": "Labor Day", "time": "09:00" }
              ]
            },
            {
              "date": 25,
              "events": [
                { "name": "Memorial Day", "time": "10:00" },
                { "name": "Parade", "time": "13:00" }
              ]
            }
          ]
        },
        {
          "id": 10,
          "name": "October",
          "data": [
            {
              "date": 31,
              "events": [
                { "name": "Halloween", "time": "18:00" },
                { "name": "Costume Party", "time": "20:00" },
                { "name": "Trick or Treating", "time": "17:00" }
              ]
            }
          ]
        }
      ]
    }
  ]
  

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState({});

  const timeSlots = useMemo(() => Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`), []);

  const getDaysInMonth = useMemo(() => {
    return (year, month) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };
  }, []);

  const generateEvents = useMemo(() => {
    const generatedEvents = {};
    backendEvents.forEach((yearData) => {
      if (yearData.year === currentYear) {
        yearData.data.forEach((monthData) => {
          if (monthData.id === currentMonth + 1) {
            monthData.data.forEach((dayData) => {
              const dateKey = `${currentYear}-${currentMonth + 1}-${dayData.date}`;
              generatedEvents[dateKey] = dayData.events.map((event) => ({
                time: event.time,
                description: event.name,
              }));
            });
          }
        });
      }
    });
    return generatedEvents;
  }, [currentYear, currentMonth]);

  useEffect(() => {
    setEvents(generateEvents);
  }, [generateEvents]);

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  return (
    <div className="calendar-wrapper min-h-screen bg-white text-black">
      <div className="calendar-header flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={goToPreviousMonth}
        >
          Previous Month
        </button>
        <h2 className="text-lg font-bold">
          {`${new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}`}
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={goToNextMonth}
        >
          Next Month
        </button>
      </div>

      <div className="calendar-content overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="w-20 bg-gray-50 border border-gray-300 text-center sticky left-0">
                Time
              </th>
              {daysInMonth.map((date, index) => (
                <th key={index} className="min-w-[120px] bg-gray-50 border border-gray-300 text-center">
                  {`${date.getDate()} ${date.toLocaleString('default', { weekday: 'short' })}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, idx) => (
              <tr key={idx} className='h-20'>
                <td className="w-20 text-center border border-gray-300 bg-gray-50 sticky left-0">
                  {time}
                </td>
                {daysInMonth.map((date, index) => {
                  const eventKey = `${currentYear}-${currentMonth + 1}-${date.getDate()}`;
                  const event = events[eventKey]?.find((e) => e.time === time);
                  return (
                    <td
                      key={index}
                      className={`h-10 px-2 border border-gray-300 ${event ? 'bg-gray-100 font-semibold' : ''}`}
                    >
                      {event ? event.description : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
