import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NusaLmsBanner from "../assets/Logo/NusaLmsBanner.png";

const CourseRekomendasi = () => {
  return (
    <div className="container pb-5 pt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <p
            className="fw-semibold"
            style={{
              width: "200px",
              height: "27px",
              fontFamily: "Poppins",
              fontSize: "18px",
              textAlign: "left",
              color: "#FF4048",
            }}
          >
            Course Rekomendasi
          </p>
          <h2
            className="fw-semibold"
            style={{
              width: "530.01px",
              height: "102px",
              fontFamily: "Poppins",
              fontSize: "34px",
              textAlign: "left",
            }}
          >
            Cari Kelas Berdasarkan Rekomendasi Kami
          </h2>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button
            className="btn btn-pill"
            style={{
              textDecoration: "none",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              color: "#FF4048",
              backgroundColor: "#FF40481A",
              borderRadius: "50px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Lihat Semua Kelas
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={NusaLmsBanner}
              alt="Home Page"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Judul Card 1</h5>
              <p className="card-text">
                Deskripsi singkat mengenai materi yang akan dipelajari.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src={NusaLmsBanner}
              alt="Home Page"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Judul Card 2</h5>
              <p className="card-text">
                Deskripsi singkat mengenai materi yang akan dipelajari.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src={NusaLmsBanner}
              alt="Home Page"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Judul Card 3</h5>
              <p className="card-text">
                Deskripsi singkat mengenai materi yang akan dipelajari.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src={NusaLmsBanner}
              alt="Home Page"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Judul Card 4</h5>
              <p className="card-text">
                Deskripsi singkat mengenai materi yang akan dipelajari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRekomendasi;
