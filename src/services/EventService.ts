import axios from 'axios'

type UserType = { id: string; name: string }

type EventType = {
  id: number
  title: string
  date: string | Date
  time: string
  attendees: UserType[]
  user: UserType
  category: string
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents({ perPage, page }: { perPage: number; page: number }) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id: string | number) {
    return apiClient.get(`/events/${id}`)
  },
  postEvent(event: EventType) {
    return apiClient.post('/events', event)
  },
}

export { EventType }
