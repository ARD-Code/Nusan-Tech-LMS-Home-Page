import AlurBelajar from "../components/AlurBelajar";
import CourseRekomendasi from "../components/CourseRekomendasi";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AlurBelajar />
      <CourseRekomendasi />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
