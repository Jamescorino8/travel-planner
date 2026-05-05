export default function({ events, onSelect }) {
    return (
        <div className="short-container">
            {events.filter(event => !event.isConfirmed).map(event => (
                <div 
                    key={event.id}
                    className="short-card"
                    onClick={() => onSelect(event.id)}
                >
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}