import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo/LogoNusaLms.jpg";
import BellIcon from "../assets/Logo/Bellicon.png";
import IndonesiaFlag from "../assets/Logo/indonesia.png";
import ProfilePicture from "../assets/Logo/Ellipse.png";

const MyNavbar = () => {
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
      <a className="navbar-brand" href="#home" style={{ marginRight: "8.5px" }}>
        <img src={Logo} width="148" height="34" alt="Company logo" />
      </a>
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#categories"
              style={{ marginRight: "8px" }}
            >
              <button
                className="btn"
                style={{
                  width: "108px",
                  height: "44px",
                  padding: "10px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Kategori
              </button>
            </a>
          </li>
          <li className="nav-item">
            <form className="form-inline" style={{ marginRight: "16px" }}>
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Mau belajar apa?"
                style={{ width: "360px", height: "45px" }}
              />
            </form>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#link1"
              style={{ marginRight: "16px" }}
            >
              <button
                className="btn"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Beranda
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#link2"
              style={{ marginRight: "16px" }}
            >
              <button
                className="btn"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Semua Materi
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#link3"
              style={{ marginRight: "16px" }}
            >
              <button
                className="btn"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Pengetahuan
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#link4"
              style={{ marginRight: "16px" }}
            >
              <button
                className="btn"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Bantuan
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#notifications"
              style={{ marginRight: "16px" }}
            >
              <img src={BellIcon} width="24" height="24" alt="Notifications" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#flag"
              style={{ marginRight: "16px" }}
            >
              <img src={IndonesiaFlag} width="24" height="24" alt="ID Flag" />
              <span style={{ marginLeft: "4px" }}>ID</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#profile"
              style={{ marginLeft: "4px" }}
            >
              <img
                src={ProfilePicture}
                width="40px"
                height="40px"
                alt="Profile"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
