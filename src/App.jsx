import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Number of Guests:', guests);

  };

  return (
    <div className="App">
      <h1>Little Lemon - Table Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
          </label>
        </div>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default App
