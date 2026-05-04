import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function ItineraryPanel({ events, onEventClick }) {
  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      initialDate="2025-06-15"
      events={events}
      eventClick={(info) => onEventClick(info.event.id)}
      headerToolbar={false}
      allDaySlot={false}
      slotMinTime="09:00:00"
      slotMaxTime="26:00:00"
      height="100%"
    />
  )
}