interface IProps {
  slides: { url: string; title: string }[];
  currentIndex: number;
}

const Slider = ({ slides, currentIndex }: IProps) => {
  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: 500 * slides.length,
          transition: ".2s",
          transform: `translateX(${-(currentIndex * 500)}px)`,
        }}
      >
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="slide"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 10, 0.4), rgba(0, 0, 10, 0.4)), url(${slides[slideIndex].url})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
