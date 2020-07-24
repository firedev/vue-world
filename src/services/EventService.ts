import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const getEvents = ({ perPage, page }: { perPage: number; page: number }) =>
  apiClient.get(`/events?_limit=${perPage}&_page=${page}`)

const getEvent = (id: string | number) => apiClient.get(`/events/${id}`)

const postEvent = (event: EventType) => apiClient.post('/events', event)

export { getEvent, getEvents, postEvent }
