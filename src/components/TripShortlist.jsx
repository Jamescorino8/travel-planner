export default function({ events }) {
    return (
        <div className="short-container">
            {events.filter(event => event.isConfirmed === false).map(event => (
                <div 
                    key={event.id} 
                    // className={`short-card ${selectedId === event.id ? 'selected' : ''}`}
                    // onClick={() => onSelect(event.id)}
                >
                    <div className="short-card">
                        <p>{event.title}</p>
                        <p>{event.description}</p>
                        <p>{event.extendedProps.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}