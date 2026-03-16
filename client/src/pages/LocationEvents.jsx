import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const [locationsData, eventsData] = await Promise.all([
                    LocationsAPI.getAllLocations(),
                    EventsAPI.getAllEvents()
                ])

                const locationId = Number(index)
                const currentLocation = locationsData.find((loc) => loc.id === locationId) || null
                const locationEvents = eventsData.filter((event) => event.location_id === locationId)

                setLocation(currentLocation)
                setEvents(locationEvents)
            } catch (error) {
                throw error
            }
        })()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location?.image} />
                </div>

                <div className='location-info'>
                    <h2>{location?.name}</h2>
                    <p>{location?.address}, {location?.city}, {location?.state} {location?.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents
