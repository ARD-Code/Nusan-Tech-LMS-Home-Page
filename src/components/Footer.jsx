import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo/LogoNusaLms.jpg";
import Social1 from "../assets/Logo/Social1.png";
import Social2 from "../assets/Logo/Social2.png";
import Social3 from "../assets/Logo/Social3.png";
import Social4 from "../assets/Logo/Social4.png";
import IosAppLogo from "../assets/Logo/Group.png";
import AndroidAppLogo from "../assets/Logo/Group2.png";

const Footer = () => {
  return (
    <footer
      className="container-fluid"
      style={{
        width: "1440px",
        height: "320px",
        padding: "64px 80px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <img src={Logo} alt="Brand Logo" />
        <div>
          <p>Copyright © Nusantech</p>
          <p>All Rights Reserved</p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="btn rounded-circle"
            style={{ width: "32px", height: "32px", padding: "0" }}
          >
            <img
              src={Social1}
              alt="Social1"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
          <button
            className="btn rounded-circle"
            style={{ width: "32px", height: "32px", padding: "0" }}
          >
            <img
              src={Social2}
              alt="Social2r"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
          <button
            className="btn rounded-circle"
            style={{ width: "32px", height: "32px", padding: "0" }}
          >
            <img
              src={Social3}
              alt="Social3"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
          <button
            className="btn rounded-circle"
            style={{ width: "32px", height: "32px", padding: "0" }}
          >
            <img
              src={Social4}
              alt="Social4"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "659px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <h5>Perusahaan</h5>
          <button className="btn">Tentang Kami</button>
          <button className="btn">Blog</button>
          <button className="btn">Kontak</button>
          <button className="btn">Testimoni</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <h5>Dukungan</h5>
          <button className="btn">Pusat Bantuan</button>
          <button className="btn">Syarat & Ketentuan</button>
          <button className="btn">Cek Sertifikat</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <h5>Download NusaLMS Mobile</h5>
          <button
            className="btn"
            style={{
              width: "150px",
              height: "50px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={AndroidAppLogo}
              alt="iOS App"
              style={{ width: "80%", height: "80%" }}
            />
          </button>
          <button
            className="btn"
            style={{
              width: "150px",
              height: "50px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={IosAppLogo}
              alt="Android App"
              style={{ width: "80%", height: "80%" }}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
