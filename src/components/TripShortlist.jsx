export default function({ events, toggleEvent, onHighlight }) {
    return (
        <div className="short-container">
            {events.filter(event => !event.isConfirmed).map(event => (
                <div 
                    key={event.id}
                    className="short-card"
                    onMouseEnter={() => onHighlight(event.id)}
                    onMouseLeave={() => onHighlight(null)}
                    onClick={() => toggleEvent(event.id)}
                >
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}