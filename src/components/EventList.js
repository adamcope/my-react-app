import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <div className={styles.card} key={event.id}>
      <h2>
        {index + 1} - {event.title}
      </h2>
      <button onClick={() => {
              return handleClick(event.id);
          }}>Delete Event</button>
    </div>
  )); 
}
