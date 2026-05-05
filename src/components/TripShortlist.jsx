export default function({ events, onSelect }) {
    return (
        <div className="short-container">
            {events.filter(event => !event.isConfirmed).map(event => (
                <div 
                    key={event.id}
                    className="short-card"
                    onMouseEnter={() => onSelect(event.id)}
                    onMouseLeave={() => onSelect(null)}
                >
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}