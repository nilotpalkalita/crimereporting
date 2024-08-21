import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ReportForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, message, email, location, photo });
  };

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setLocation(e.latlng);
      },
    });
    return null;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
          <MenuItem value="traffic">Traffic</MenuItem>
          <MenuItem value="people">People</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', marginBottom: '16px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapEvents />
        {location && <Marker position={location} />}
      </MapContainer>
      <Button type="submit" variant="contained" color="primary">
        Submit Report
      </Button>
    </form>
  );
};

export default ReportForm;