import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Slider from "./components/Slider";

const slides = [
  { url: "./image-1.jpg", title: "image 1" },
  { url: "./image-2.jpg", title: "image 2" },
  { url: "./image-3.jpg", title: "image 3" },
  { url: "./image-4.jpg", title: "image 4" },
  { url: "./image-5.jpg", title: "image 5" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isFirstSlide = currentIndex == slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>React slider</h1>
      <div className="slider">
        {/* Arrows */}
        <div onClick={prevSlide} className="left-arrow">
          ❰
        </div>
        <div onClick={nextSlide} className="right-arrow">
          ❱
        </div>
        {/* Slider */}
        <Slider slides={slides} currentIndex={currentIndex} />
        {/* dots */}
        <div className="dots">
          {slides.map((_, index) => {
            return (
              <div
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => goToSlide(index)}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
