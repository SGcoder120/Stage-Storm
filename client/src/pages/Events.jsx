import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Events.css'

const locationRoutes = {
  1: '/echolounge',
  2: '/houseofblues',
  3: '/pavilion',
  4: '/americanairlines'
}

const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [selectedLocationId, setSelectedLocationId] = useState('all')

  const getTimeRemaining = (date, time) => {
    if (!date || !time) return null

    const [year, month, day] = date.split('-').map(Number)
    const timeMatch = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
    if (!year || !month || !day || !timeMatch) return null

    let hours = Number(timeMatch[1])
    const minutes = Number(timeMatch[2])
    const meridiem = timeMatch[3].toUpperCase()
    if (meridiem === 'PM' && hours < 12) hours += 12
    if (meridiem === 'AM' && hours === 12) hours = 0

    const eventDate = new Date(year, month - 1, day, hours, minutes)
    const now = new Date()
    const diffMs = eventDate.getTime() - now.getTime()
    if (Number.isNaN(diffMs)) return null
    if (diffMs <= 0) return 'Event has passed'

    const totalMinutes = Math.floor(diffMs / 60000)
    const days = Math.floor(totalMinutes / 1440)
    const hoursLeft = Math.floor((totalMinutes % 1440) / 60)

    if (days > 0) {
      const adjustedDays = days + 1
      return `${adjustedDays} day${adjustedDays === 1 ? '' : 's'} left`
    }
    return `${hoursLeft} hour${hoursLeft === 1 ? '' : 's'} left`
  }

  useEffect(() => {
    (async () => {
      try {
        const [eventsData, locationsData] = await Promise.all([
          EventsAPI.getAllEvents(),
          LocationsAPI.getAllLocations()
        ])

        setEvents(eventsData)
        setLocations(locationsData)
      } catch (error) {
        throw error
      }
    })()
  }, [])

  const locationsById = useMemo(() => {
    return locations.reduce((acc, location) => {
      acc[location.id] = location
      return acc
    }, {})
  }, [locations])

  const filteredEvents = useMemo(() => {
    if (selectedLocationId === 'all') return events
    const locationId = Number(selectedLocationId)
    return events.filter((event) => event.location_id === locationId)
  }, [events, selectedLocationId])

  return (
    <div className='events-page'>
      <header className='events-header'>
        <h2>All Events</h2>
        <div className='events-filter'>
          <label htmlFor='location-select'>Filter by location</label>
          <select
            id='location-select'
            value={selectedLocationId}
            onChange={(event) => setSelectedLocationId(event.target.value)}
          >
            <option value='all'>All locations</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className='events-grid'>
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const location = locationsById[event.location_id]
            const locationPath = locationRoutes[event.location_id]
            const timeRemaining = getTimeRemaining(event.date, event.time)
            return (
              <article key={event.id} className='event-information'>
                <img src={event.image} alt={event.title} />

                <div className='event-information-overlay'>
                  <div className='text'>
                    <h3>{event.title}</h3>
                    <p>
                      <i className='fa-regular fa-calendar fa-bounce'></i>
                      {event.date} <br /> {event.time}
                    </p>
                    {timeRemaining ? <p>{timeRemaining}</p> : null}
                    {location ? (
                      locationPath ? (
                        <p>
                          <Link to={locationPath} className='event-location-link'>
                            {location.name}
                          </Link>
                        </p>
                      ) : (
                        <p>{location.name}</p>
                      )
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })
        ) : (
          <h2>
            <i className='fa-regular fa-calendar-xmark fa-shake'></i>
            {'No events to show.'}
          </h2>
        )}
      </main>
    </div>
  )
}

export default Events
