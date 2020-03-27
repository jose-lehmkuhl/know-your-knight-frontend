import axios from 'axios'

const API_URL = "http://localhost:8000"

export const fetchDestinations = async (position) => {
    const response = await axios.get(`${API_URL}/destinations?position=${position}`)
    return response.data
}
