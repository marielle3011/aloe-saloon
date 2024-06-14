import { useState } from "react";
import axios from 'axios';

function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending data to the backend
      const response = await axios.post("http://localhost:3001/Appointment", {
        name,
        email,
        date,
        time
      });

      // Show alert message
      alert("Appointment noted. " + response.data);

      // Reset form fields
      setName("");
      setEmail("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Book your Appointment</h1>
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Choose your desired service</label>
            {/* You can add more input fields or a dropdown for services here */}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="date">Choose your DATE</label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="time">Choose your Time</label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input
              className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-md cursor-pointer hover:bg-green-700"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
