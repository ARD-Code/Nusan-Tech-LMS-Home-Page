import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImagePlaceHolder1 from "../assets/Logo/Image1.png";
import ImagePlaceHolder2 from "../assets/Logo/Image2.png";
import ImagePlaceHolder3 from "../assets/Logo/Image3.png";
import ImagePlaceHolder4 from "../assets/Logo/Image4.png";
import ImagePlaceHolder5 from "../assets/Logo/Image5.png";
import ImagePlaceHolder6 from "../assets/Logo/Image6.png";
import ImagePlaceHolder7 from "../assets/Logo/Image7.png";
import ImagePlaceHolder8 from "../assets/Logo/Image8.png";

const AlurBelajar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p
            className="fw-semibold"
            style={{
              width: "106px",
              height: "27px",
              fontFamily: "Poppins",
              fontSize: "18px",
              textAlign: "left",
              opacity: "100",
              color: "#FF4048",
            }}
          >
            Alur Belajar
          </p>
          <h2
            className="fw-semibold"
            style={{
              width: "530.01px",
              height: "102px",
              fontFamily: "Poppins",
              fontSize: "34px",
              textAlign: "left",
              opacity: "100",
            }}
          >
            Pelajari Materi Sesuai Arahan Belajar
          </h2>
        </div>
      </div>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder1}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Software Development
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar software development dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder2}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Graphic Design
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar graphic design dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder3}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Database Management
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar database management dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder4}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Dev Ops Engineering
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar software development dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder5}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas UI/UX Design
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar UI/UX design dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder6}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Back-end Development
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar back-end development dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder7}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Machine Learning
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar machine learning dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div
                className="mb-3"
                style={{
                  width: "80px",
                  height: "78px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImagePlaceHolder8}
                  alt="circle"
                  className="img-fluid"
                />
              </div>
              <h4
                className="fw-semibold"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Kelas Data Science
              </h4>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.032em",
                  textAlign: "left",
                }}
              >
                Belajar data science dari mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlurBelajar;
