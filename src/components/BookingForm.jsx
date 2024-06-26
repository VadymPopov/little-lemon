export default function BookingForm({
  reservation,
  updateReservation,
  availableTimes,
}) {
  function onSubmit(e) {
    e.preventDefault();
    console.log(reservation);
  }

  const { date, time, number, occasion } = reservation;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        name='date'
        id='res-date'
        value={date}
        onChange={updateReservation}
        required
      />
      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        name='time'
        value={time}
        onChange={updateReservation}
        required>
        {availableTimes.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        name='number'
        value={number}
        onChange={updateReservation}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        value={occasion}
        onChange={updateReservation}
        required
        name='occasion'>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type='submit'>Make Your reservation</button>
    </form>
  );
}
