

export default function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <div key={event.id}>
      <h2>
        {index + 1} - {event.title}
      </h2>
      <button onClick={() => {
              return handleClick(event.id);
          }}>Delete Event</button>
    </div>
  ));
}
