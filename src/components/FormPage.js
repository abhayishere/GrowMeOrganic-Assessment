import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import './formpage.css'
const FormPage = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let history = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    history("/data");
  };

  return (
    <Container className="container" maxWidth="sm">
      <Typography variant="h4">Enter your details</Typography>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button className="btn" type="submit" variant="contained" color="primary" >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormPage;
