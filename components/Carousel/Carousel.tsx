"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type CarouselProps = {
  images: string[];
  zoomed?: boolean;
};

export default function Carousel({ images, zoomed }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className={
        zoomed ? styles.carouselContainerZoomed : styles.carouselContainer
      }
    >
      <div className={zoomed ? styles.carouselZoomed : styles.carousel}>
        <button
          className={styles.carouselButtonPrevious}
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          <IoIosArrowBack />
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button
          className={styles.carouselButtonNext}
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className={styles.carouselThumbnails}>
        {images.map((image, index) => (
          <img
            className={currentIndex == index ? styles.activeSlide : undefined}
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
