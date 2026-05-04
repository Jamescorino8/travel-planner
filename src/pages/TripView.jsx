import TripMap from "../components/TripMap";
import TripItinerary from "../components/TripItinerary"
import TripShortlist from "../components/TripShortlist";

const EVENTS = [
  {
    id: 'i1',
    title: 'Gyeongbokgung Palace',
    start: '2025-06-15T09:00:00',
    end: '2025-06-15T11:00:00',
    extendedProps: { location: 'Jongno-gu', coords: [37.5796, 126.9770] }
  },
  {
    id: 'i2',
    title: 'Bukchon Hanok Village',
    start: '2025-06-15T11:30:00',
    end: '2025-06-15T13:00:00',
    extendedProps: { location: 'Gahoe-dong', coords: [37.5822, 126.9850] }
  },
  {
    id: 'i4',
    title: 'N Seoul Tower',
    start: '2025-06-15T15:00:00',
    end: '2025-06-15T17:00:00',
    extendedProps: { location: 'Yongsan-gu', coords: [37.5512, 126.9882] }
  },
]

export default function TripView() {
    return (
        <>
        <div className="hero">
            <h1>Trip Planner</h1>
        </div>
        <div className="flex-container">
            <div className="shortlist">
                <TripShortlist
                    events={EVENTS}
                    
                />
            </div>
            <div className="map">
                <TripMap
                    events={EVENTS}
                />
            </div>
            <div className="itinerary">
                <TripItinerary
                    events={EVENTS}
                    onEventClick={(id) => setSelectedItinId(id)}
                />
            </div>
        </div>
        </>
    );
}