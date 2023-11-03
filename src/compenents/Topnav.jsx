import React from "react";
import CallIcon from "@mui/icons-material/Call";
import "./style.css";
import { Button, Container } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
const Topnav = () => {
  return (
    <div className="p-3 bg-dark text-white">
      <Container className="topnav_sub">
        <div>
          <CallIcon className="topnav_logo me-2" />

          <span>Call : +01 123455678990</span>
        </div>
        <div>
          <EmailIcon className="topnav_logo me-2" />

          <span>Email : demo@gmail.com</span>
        </div>
      </Container>
    </div>
  );
};

export default Topnav;
