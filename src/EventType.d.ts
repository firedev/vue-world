type EventType = {
  id: number
  title: string
  date: string | Date
  time: string
  attendees: UserType[]
  user: UserType
  category: string
}
