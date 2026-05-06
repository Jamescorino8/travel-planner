import { useState } from 'react'
import TripMap from "../components/TripMap";
import TripItinerary from "../components/TripItinerary"
import TripShortlist from "../components/TripShortlist";

const EVENTS = [
  {
    id: 'i1',
    title: 'Gyeongbokgung Palace',
    description: 'The main royal palace of the Joseon Dynasty, originally built in 1395 in northern Seoul.',
    start: '2026-06-23T09:00:00',
    end: '2026-06-23T11:00:00',
    extendedProps: { location: 'Jongno-gu', coords: [37.5796, 126.9770] },
    isConfirmed: false
  },
  {
    id: 'i2',
    title: 'Bukchon Hanok Village',
    description: 'A historic residential neighborhood in Seoul, South Korea, located between Gyeongbokgung Palace, Changdeokgung Palace, and Jongmyo Shrine.',
    start: '2026-06-23T11:30:00',
    end: '2026-06-23T13:00:00',
    extendedProps: { location: 'Gahoe-dong', coords: [37.5822, 126.9850] },
    isConfirmed: false
  },
  {
    id: 'i3',
    title: 'N Seoul Tower',
    description: 'A 237-meter iconic landmark atop Namsan Mountain (480m above sea level) in Seoul, South Korea.',
    start: '2026-06-23T15:00:00',
    end: '2026-06-23T17:00:00',
    extendedProps: { location: 'Yongsan-gu', coords: [37.5512, 126.9882] },
    isConfirmed: false
  },
]

export default function TripView() {
    const [events, setEvents] = useState(EVENTS)
    const [highlightedId, setHighlightedId] = useState(null)

    const toggleEvent = (id) => {
        setEvents(prev => prev.map(e => e.id === id ? { ...e, isConfirmed: !e.isConfirmed } : e))
    }

    return (
        <>
        <div className="header">
            <h1>Trip Planner</h1>
        </div>
        <div className="flex-container">
            <div className="shortlist">
                <TripShortlist
                    events={events}
                    onHighlight={setHighlightedId}
                    toggleEvent={toggleEvent}
                />
            </div>
            <div className="map">
                <TripMap
                    events={events}
                    highlightedId={highlightedId}
                    toggleEvent={toggleEvent}
                />
            </div>
            <div className="itinerary">
                <TripItinerary
                    events={events}
                    onHighlight={setHighlightedId}
                    toggleEvent={toggleEvent}
                />
            </div>
        </div>
        </>
    );
}