import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo/LogoNusaLms.jpg";
import BellIcon from "../assets/Logo/Bellicon.png";
import IndonesiaFlag from "../assets/Logo/indonesia.png";
import ProfilePicture from "../assets/Logo/Ellipse.png";

const MyNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    textAlign: "left",
    width: "300px",
    height: "24px",
    backgroundColor: "transparent",
    paddingBottom: "38px",
    border: "none",
    color: "black",
    cursor: "pointer",
    margin: "0",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    color: "#FF4048",
  };

  const additionalTextStyle = {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.032em",
    textAlign: "left",
    marginTop: "10px",
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "white",
        paddingLeft: "80px",
        paddingRight: "80px",
        marginTop: "24px",
      }}
    >
      <div className="container">
        <a className="navbar-brand mx-auto" href="#home">
          <img src={Logo} width="148" height="34" alt="Company logo" />
        </a>
        <div className="navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#categories">
                <button className="btn">Kategori</button>
              </a>
            </li>
            <li className="nav-item">
              <form className="form-inline">
                <input
                  className="form-control form-control-lg rounded-pill"
                  type="text"
                  placeholder="Mau belajar apa?"
                  style={{ width: "360px", height: "45px" }}
                />
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link1">
                <button className="btn">Beranda</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/SemuaCourse">
                <button className="btn">Semua Course</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link3">
                <button className="btn">Pengetahuan</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link4">
                <button className="btn">Bantuan</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#notifications">
                <img
                  src={BellIcon}
                  width="24"
                  height="24"
                  alt="Notifications"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#flag">
                <img src={IndonesiaFlag} width="24" height="24" alt="ID Flag" />
                <span style={{ marginLeft: "4px" }}>ID</span>
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#profile"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={ProfilePicture}
                  width="40px"
                  height="40px"
                  alt="Profile"
                  className="rounded-circle"
                />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right p-3 ${
                  dropdownVisible ? "d-block" : "d-none"
                }`}
                aria-labelledby="navbarDropdown"
                style={{
                  width: "275px",
                  height: "415px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  transition: "opacity 0.3s",
                  opacity: dropdownVisible ? 1 : 0,
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={ProfilePicture}
                    width="45"
                    height="45"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <div className="ml-3 ps-2">
                    <div>Customer Name</div>
                    <div className="text-muted">Profession</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="d-flex flex-column">
                  {[
                    "Materi Saya",
                    "Permintaan Pelatih",
                    "Perkembangan Belajar",
                    "Akun",
                    "Sertifikat",
                  ].map((text, index) => (
                    <button
                      key={index}
                      style={
                        hoveredButton === index ? buttonHoverStyle : buttonStyle
                      }
                      onMouseEnter={() => setHoveredButton(index)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
                <div className="dropdown-divider"></div>
                <button className="btn btn-link text-danger">Logout</button>
                <div style={additionalTextStyle}>
                  Belajar software development dari mentor berpengalaman
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
