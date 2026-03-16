const API_BASE = '/api/events'

const getAllEvents = async () => {
  const response = await fetch(API_BASE)
  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`)
  }
  return response.json()
}

const getEventById = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch event ${id}: ${response.status}`)
  }
  return response.json()
}

// Keep existing call sites working while matching naming in instructions
const getEventsById = (id) => getEventById(id)

const EventsAPI = {
  getAllEvents,
  getEventById,
  getEventsById
}

export default EventsAPI
