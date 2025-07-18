import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/all" className="nav-btn">All</NavLink>
      <NavLink to="/select" className="nav-btn">select</NavLink>
      <NavLink to="/not" className="nav-btn">Not</NavLink>
    </div>
  );
}
