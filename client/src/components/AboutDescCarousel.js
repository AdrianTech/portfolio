import React from "react";
import { UserContext } from "../store/getData";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AboutDescCarousel = () => {
  const { user, loading } = React.useContext(UserContext);
  let sliders, dots, totalSlides;
  const treatDiv = {
    margin: "auto 0",
  };
  if (!loading) {
    sliders = user.aboutDescs.map((slider, i) => (
      <Slide className="descSlide" style={slider.desc.length < 120 && treatDiv} key={slider.id} index={i}>
        {slider.desc}
      </Slide>
    ));
    dots = user.aboutDescs.map((slider, i) => <Dot className="dot" key={slider.id} slide={i} />);
    totalSlides = user.aboutDescs.length;
  }

  return (
    <div className="text-about">
      <CarouselProvider naturalSlideWidth={100} isPlaying={true} isIntrinsicHeight={true} interval={8000} totalSlides={totalSlides} touchEnabled={true} visibleSlides={1} orientation="horizontal">
        <Slider className="sliders">{sliders}</Slider>
        <div className="dots">{dots}</div>
      </CarouselProvider>
    </div>
  );
};

export default AboutDescCarousel;
