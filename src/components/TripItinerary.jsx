import { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function TripItinerary({ events, onSelect}) {
  const defaultEventColor = 'rgba(213, 0, 0, 0.65)'
  const hoverEventColor = 'rgba(160, 0, 0, 0.85)'
  const calendarRef = useRef(null)
  const formatDate = d => `${d.toLocaleDateString('en-US', { weekday: 'long' })} ${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}`
  const [currentDate, setCurrentDate] = useState(formatDate(new Date(2026, 5, 23)))

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      initialDate="2026-06-23"
      events={events.filter(event => event.isConfirmed)}
      eventMouseEnter={(info) => {
        info.el.style.backgroundColor = hoverEventColor
        info.el.style.borderColor = hoverEventColor
        onSelect(info.event.id)
      }}
      eventMouseLeave={(info) => {
        onSelect(null)
        info.el.style.backgroundColor = defaultEventColor
        info.el.style.borderColor = defaultEventColor
      }}
      eventClick={(info) => onSelect(info.event.id)}
      headerToolbar={false}
      allDaySlot={false}
      weekends={true}
      dayHeaderContent={() => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => { calendarRef.current.getApi().prev(); setCurrentDate(formatDate(calendarRef.current.getApi().getDate())) }}>← Prev</button>
            <button onClick={() => { calendarRef.current.getApi().gotoDate('2026-06-23'); setCurrentDate(formatDate(new Date(2026, 5, 23))) }}>{currentDate}</button>
            <button onClick={() => { calendarRef.current.getApi().next(); setCurrentDate(formatDate(calendarRef.current.getApi().getDate())) }}>Next →</button>
        </div>
      )}
      slotMinTime="07:00:00"
      slotMaxTime="24:30:00"
      height="100%"
      eventColor={defaultEventColor}
    />
  )
}