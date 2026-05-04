import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function TripItinerary({ events, onEventClick}) {
  const defaultEventColor = 'rgba(213, 0, 0, 0.65)'
  const hoverEventColor = 'rgba(160, 0, 0, 0.85)'

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      initialDate="2025-06-23"
      events={events.filter(event => event.isConfirmed)}
      eventMouseEnter={(info) => {
        info.el.style.backgroundColor = hoverEventColor
        info.el.style.borderColor = hoverEventColor
      }}
      eventMouseLeave={(info) => {
        info.el.style.backgroundColor = defaultEventColor
        info.el.style.borderColor = defaultEventColor
      }}
      eventClick={(info) => onEventClick(info.event.id)}
      headerToolbar={false}
      allDaySlot={false}
      slotMinTime="07:00:00"
      slotMaxTime="24:30:00"
      height="100%"
      eventColor={defaultEventColor}
    />
  )
}