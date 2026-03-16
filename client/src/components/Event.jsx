import React, { useMemo } from 'react'
import '../css/Event.css'

const Event = (props) => {
    const timeRemaining = useMemo(() => {
        if (!props.date || !props.time) return null

        // Parse YYYY-MM-DD and "h:mm AM/PM" into a local Date
        const [year, month, day] = props.date.split('-').map(Number)
        const timeMatch = props.time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
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
    }, [props.date, props.time])

    return (
        <article className='event-information'>
            <img src={props.image} alt={props.title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {props.time}</p>
                    {timeRemaining ? <p>{timeRemaining}</p> : null}
                </div>
            </div>
        </article>
    )
}

export default Event
