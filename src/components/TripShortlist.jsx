/**
 * Idea:
 *  - Identical to Calendar in Itinerary, but no header/time shown.
 *  - list events one after another
 */

export default function({ events, selectedId, onSelect }) {
    return (
        <div className="short-container">
            {events.map(event => (
                <div 
                    key={event.id} 
                    className={`short-card ${selectedId === event.id ? 'selected' : ''}`}
                    onClick={() => onSelect(event.id)}
                >
                    <p>{event.title}</p>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}