import React, { useCallback, useEffect, useRef, useState } from "react";
import { Anime } from "../../models/Anime";
import Card from "../Card/Card";
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

  const updateScrollableDistance = useCallback(() => {
    let scrollableSectionWidth =
      scrollableSection.current.getBoundingClientRect().width;
    setScrollableDistance(scrollableSectionWidth);
  }, []);

  const resizeHandler = useCallback(
    (event: any) => {
      updateScrollableDistance();
    },
    [updateScrollableDistance]
  );

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    updateScrollableDistance();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler, updateScrollableDistance]);

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
          getListItemComponent={(itemProps: Anime) => <Card {...itemProps} />}
        />
      </div>
    </div>
  );
};

export default Slider;
