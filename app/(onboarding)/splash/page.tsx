'use client';
import styles from "./splash.module.css";
import Image from "next/image";



export default function SplashPage() {
 

  // Simulate loading completion
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowContinue(true);
  //   }, 5000); // 3-second delay for the loading simulation

  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <div className={styles.container}>
    <div className={styles.gradient}></div>
    <div className={styles.logo}>
      <Image 
        src="/images/logo.png"
        alt="Logo"
        width={144}
        height={144}
        priority
      />
      <span className={styles.logotext}>CallNetwork</span>
    </div>
    <div className={styles.bottomrect}>
      <Image 
        src="/images/splashrect.png"
        alt="Rectangle"
        width={144}
        height={144}
        priority
      />
    </div>
  </div>
  );
}
