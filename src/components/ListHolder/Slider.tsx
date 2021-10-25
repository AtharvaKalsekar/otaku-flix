import React, { useEffect, useRef, useState } from "react";
import ScrollableList, {
  ScrollDimension,
  ScrollDirection,
} from "../ScrollableList/ScrollableList";
import "./Slider.css";

interface ISlider {
  heading: string;
  list: any[];
}

const Slider = (props: ISlider) => {
  const scrollableSection = useRef<any>();

  const [numberOfScrolls, setNumberOfScrolls] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    ScrollDirection.ORIGIN
  );
  const [scrollableDistance, setScrollableDistance] = useState<number>(0);

  useEffect(() => {
    let scrollableSectionWidth =
      scrollableSection.current.getBoundingClientRect().width;
    setScrollableDistance(scrollableSectionWidth);
  }, []);

  const slideLeft = () => {
    setNumberOfScrolls(numberOfScrolls - 1);
    setScrollDirection(ScrollDirection.MINUS);
  };

  const slideRight = () => {
    setNumberOfScrolls(numberOfScrolls + 1);
    setScrollDirection(ScrollDirection.PLUS);
  };

  return (
    <div>
      <div className="slider-header">
        <div className="slider-header-heading">
          <span>{props.heading}</span>
        </div>

        <div className="slider-header-action-panel">
          <button onClick={slideLeft} disabled={numberOfScrolls <= 0}>
            Scroll Left
          </button>
          <button onClick={slideRight}>Scroll Right</button>
        </div>
      </div>

      <hr />

      <div ref={scrollableSection} className="slider-scroll-area">
        <ScrollableList
          scrollDimension={ScrollDimension.X}
          scrollDirection={scrollDirection}
          scrollDistance={scrollableDistance}
          list={props.list}
        />
      </div>
    </div>
  );
};

export default Slider;
