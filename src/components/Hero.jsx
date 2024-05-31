import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageImage from "../assets/Logo/HomePageImage.png";

const Hero = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", padding: "50px" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <div style={{ marginBottom: "20px" }}>
            <h1
              style={{
                width: "413px",
                height: "138px",
                fontFamily: "Poppins",
                fontSize: "46px",
                fontWeight: "600",
                lineHeight: "69px",
                textAlign: "left",
              }}
            >
              Tingkatkan Skill Raih Impianmu
            </h1>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                width: "437px",
                height: "93.07px",
                fontFamily: "Nunito",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "27px",
                textAlign: "left",
              }}
            >
              Belajar dari mentor yang berpengalaman di bidangnya dan
              mendapatkan sertifikat resmi untuk membangun karir masa depan
            </p>
          </div>
          <div>
            <button
              className="btn"
              style={{
                width: "204px",
                height: "54px",
                padding: "15px 35px",
                gap: "10px",
                backgroundColor: "#FF4048",
                color: "white",
                boxShadow: "0px 4px 40px 0px #FF404826",
                opacity: "1",
                borderRadius: "50px",
              }}
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={HomePageImage}
            alt="Home Page"
            style={{
              width: "587px",
              height: "451px",
              opacity: "0.9",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
