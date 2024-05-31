import AlurBelajar from "../components/AlurBelajar";
import CourseRekomendasi from "../components/CourseRekomendasi";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AlurBelajar />
      <CourseRekomendasi />
      <Footer />
    </div>
  );
};

export default Home;
