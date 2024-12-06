'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./splash.module.css";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/step1'); // Navigate to Step 1 after 4 seconds
    }, 4000); // 4-second delay

    return () => clearTimeout(timer); 
  }, [router]);

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
