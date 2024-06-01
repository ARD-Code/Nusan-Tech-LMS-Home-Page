import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Customer1 from "../assets/Logo/Customer1.png";
import Customer2 from "../assets/Logo/Customer2.png";
import Customer3 from "../assets/Logo/Customer3.png";

const LearningPath = () => {
  const cardContainerRef = useRef(null);
  const [canScrollToLeft, setCanScrollToLeft] = useState(false);
  const [canScrollToRight, setCanScrollToRight] = useState(true);

  const checkScrollButtons = () => {
    const scrollPos = cardContainerRef.current.scrollLeft;
    const maxScrollLeft =
      cardContainerRef.current.scrollWidth -
      cardContainerRef.current.clientWidth;
    setCanScrollToLeft(scrollPos > 0);
    setCanScrollToRight(scrollPos < maxScrollLeft);
  };

  const scroll = (scrollOffset) => {
    cardContainerRef.current.scrollLeft += scrollOffset;
    checkScrollButtons();
  };

  useEffect(() => {
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  useEffect(() => {
    checkScrollButtons();
  }, [canScrollToLeft, canScrollToRight]);

  const customers = [
    {
      id: 1,
      name: "Dwi Sasongko",
      profession: "Web Developer",
      comment: "Very Nice..",
      rating: 5,
      imageUrl: Customer1,
    },
    {
      id: 2,
      name: "Gita Rahmah",
      profession: "Designer Grafis",
      comment: "Very Nice..",
      rating: 5,
      imageUrl: Customer2,
    },
    {
      id: 3,
      name: "Agus Salim",
      profession: "Digital Marketer",
      comment: "Very Nice..",
      rating: 5,
      imageUrl: Customer3,
    },
    {
      id: 4,
      name: "Siti Aminah",
      profession: "Content Creator",
      comment: "Beneficial and informative...",
      rating: 5,
      imageUrl: Customer1,
    },
    {
      id: 4,
      name: "Siti Aminah",
      profession: "Content Creator",
      comment: "Beneficial and informative...",
      rating: 5,
      imageUrl: Customer1,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p
            className="fw-semibold"
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              textAlign: "left",
              color: "#FF4048",
            }}
          >
            Learning Path
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <h2
              className="fw-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "34px",
                textAlign: "left",
              }}
            >
              Learn Materials According to the Learning Path
            </h2>
            <div>
              <button
                className={`btn ${
                  canScrollToLeft ? "btn-outline-secondary" : "btn-secondary"
                }`}
                onClick={() => scroll(-300)}
                disabled={!canScrollToLeft}
                style={{ marginRight: "10px" }}
              >
                &#8592;
              </button>
              <button
                className={`btn ${
                  canScrollToRight ? "btn-outline-secondary" : "btn-secondary"
                }`}
                onClick={() => scroll(300)}
                disabled={!canScrollToRight}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="col-md-12"
          ref={cardContainerRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
          }}
        >
          <div style={{ display: "flex", minWidth: "900px" }}>
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="card m-2"
                style={{ width: "300px", flexShrink: 0 }}
              >
                <div className="card-body">
                  <img
                    src={customer.imageUrl}
                    alt={customer.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      marginBottom: "10px",
                    }}
                  />
                  <h5
                    className="card-title"
                    style={{
                      textAlign: "left",
                      color: "#FF4048",
                    }}
                  >
                    {customer.name}
                  </h5>
                  <h6
                    className="card-subtitle mb-2"
                    style={{
                      textAlign: "left",
                      color: "#BABABA",
                    }}
                  >
                    {customer.profession}
                  </h6>
                  <p className="card-text" style={{ textAlign: "left" }}>
                    {customer.comment}
                  </p>
                  <div style={{ color: "#FFD700", textAlign: "left" }}>
                    {"⭐".repeat(customer.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
