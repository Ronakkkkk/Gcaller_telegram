'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "./page1.module.css";
import { useRouter } from "next/navigation";

export default function Step1Page() {
  const router = useRouter();
  const slides = [
    {
      icon: "/icons/onboarding/onbo1.png",
      title: (
        <>
          Your Trusted Identity, Powered <br /> by Blockchain.
        </>
      ),
      description: (
        <>
          Experience secure, decentralized caller <br /> identification with blockchain technology.
        </>
      ),
    },
    {
      icon: "/icons/onboarding/onbo2.png",
      title: (
        <>
          Get rewards for identifying <br />spam.
        </>
      ),
      description: "Help the community by identifying spam callers and messages.",
    },
    {
      icon: "/icons/onboarding/onbo3.png",
      title: (
        <>
          You Are Important So Is <br/>Your Data
        </>
      ),
      description: "Block unwanted calls and enjoy a seamless calling experience.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchStartX - touchEndX;

    e.preventDefault(); // Prevent default touch behavior

    if (Math.abs(delta) > 50) {
      if (delta > 0 && activeIndex < slides.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (delta < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }

    setTouchStartX(null); // Reset
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleLaunch = () =>{
    router.push('/step2')
  }

  return (
    <div className={styles.container}>
      <div className={styles.indicator}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicatorDot} ${activeIndex === index ? styles.active : styles.unactive}`}
          ></span>
        ))}
      </div>
      <div className={styles.scrollContainer} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div key={activeIndex} className={styles.slide}>
          {activeIndex === 2 ? (
            
           <div className="justifycontent-center">
            <h1 className={styles.titlethird}>{slides[activeIndex].title}</h1>
            <Image
                src={slides[activeIndex].icon}
                alt={`Slide ${activeIndex + 1}`}
                width={328}
                height={271}
                className={styles.textContainer}
              />
            
           </div>
          ) : (
            <div>
              <Image
                src={slides[activeIndex].icon}
                alt={`Slide ${activeIndex + 1}`}
                width={308}
                height={308}
                className={styles.icon}
              />
              <h1 className={styles.title}>{slides[activeIndex].title}</h1>
              <p className={styles.description}>{slides[activeIndex].description}</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.navButton} disabled={activeIndex === 0}>
          &lt;
        </button>
        <button onClick={handleNext} className={styles.navButton} disabled={activeIndex === slides.length - 1}>
          &gt;
        </button>
      </div>

      <button onClick={handleLaunch} className={styles.launchButton}>Launch App</button>
    </div>
  );
}