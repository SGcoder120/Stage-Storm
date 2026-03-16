const API_BASE = '/api/locations'

const getAllLocations = async () => {
  const response = await fetch(API_BASE)
  if (!response.ok) {
    throw new Error(`Failed to fetch locations: ${response.status}`)
  }
  return response.json()
}

const getLocationById = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch location ${id}: ${response.status}`)
  }
  return response.json()
}

const LocationsAPI = {
  getAllLocations,
  getLocationById
}

export default LocationsAPI
