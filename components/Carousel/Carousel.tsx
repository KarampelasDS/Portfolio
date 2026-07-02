"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
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
