import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImagePlaceHolder1 from "../assets/Logo/Image1.png";
import ImagePlaceHolder2 from "../assets/Logo/Image2.png";
import ImagePlaceHolder3 from "../assets/Logo/Image3.png";
import ImagePlaceHolder4 from "../assets/Logo/Image4.png";
import ImagePlaceHolder5 from "../assets/Logo/Image5.png";
import ImagePlaceHolder6 from "../assets/Logo/Image6.png";
import ImagePlaceHolder7 from "../assets/Logo/Image7.png";
import ImagePlaceHolder8 from "../assets/Logo/Image8.png";
import "./KategoriCourse.css";

const KategoriCourse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const courses = [
    {
      id: 1,
      image: ImagePlaceHolder1,
      title: "Kelas Software Development",
      description: "Belajar software development dari mentor berpengalaman",
    },
    {
      id: 2,
      image: ImagePlaceHolder2,
      title: "Kelas Graphic Design",
      description: "Belajar graphic design dari mentor berpengalaman",
    },
    {
      id: 3,
      image: ImagePlaceHolder3,
      title: "Kelas Database Management",
      description: "Belajar database management dari mentor berpengalaman",
    },
    {
      id: 4,
      image: ImagePlaceHolder4,
      title: "Kelas Dev Ops Engineering",
      description: "Belajar Dev Ops Engineering dari mentor berpengalaman",
    },
    {
      id: 5,
      image: ImagePlaceHolder5,
      title: "Kelas UI/UX Design",
      description: "Belajar UI/UX design dari mentor berpengalaman",
    },
    {
      id: 6,
      image: ImagePlaceHolder6,
      title: "Kelas Back-end Development",
      description: "Belajar back-end development dari mentor berpengalaman",
    },
    {
      id: 7,
      image: ImagePlaceHolder7,
      title: "Kelas Machine Learning",
      description: "Belajar machine learning dari mentor berpengalaman",
    },
    {
      id: 8,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 9,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 10,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 11,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 12,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 13,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 14,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 15,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 16,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 17,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 18,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 19,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
    {
      id: 20,
      image: ImagePlaceHolder8,
      title: "Kelas Data Science",
      description: "Belajar data science dari mentor berpengalaman",
    },
  ];

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(courses.length / cardsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container pb-5 pt-5">
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
        Kategori
      </h2>

      <div className="row">
        {currentCards.map((course) => (
          <div key={course.id} className="col-md-3 mb-4">
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
                  <img src={course.image} alt="circle" className="img-fluid" />
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
                  {course.title}
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
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-end align-items-center">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                &laquo;
              </button>
            </li>
            {Array(totalPages)
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link page-box"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                onClick={() => paginate(currentPage + 1)}
                className="page-link"
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default KategoriCourse;
