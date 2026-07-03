"use client";

import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type CarouselProps = {
  images: string[];
  zoomed?: boolean;
};

export default function Carousel({ images, zoomed }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // The `images` are theme-dependent, so their src is only known on the client.
  // Render them after mount to keep server and client HTML in sync (no hydration
  // mismatch). Until then we show a placeholder that reserves the space.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        {mounted ? (
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        ) : (
          <div className={styles.carouselSkeleton} aria-hidden="true" />
        )}
        <button
          className={styles.carouselButtonNext}
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className={styles.carouselThumbnails}>
        {mounted &&
          images.map((image, index) => (
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
