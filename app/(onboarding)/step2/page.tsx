"use client";

import Image from "next/image";
import styles from "./step2.module.css";
import { useRouter } from "next/navigation";

export default function Step1Page() {
  const router = useRouter();

  const handleLaunch = () => {
    setTimeout(() => {
      router.push("/step3");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>

      <div>
        <Image
          src={"/icons/onboarding/onbo4.png"}
          alt={`Redirect to bot`}
          width={290}
          height={290}
          className={styles.icon}
        />

        <p className={styles.description}>
          {"Continue to the CallNetwork Bot that allows you to import contacts and farm your $Call."}
        </p>
      </div>

      <a
        href={"https://web.telegram.org/k/#@gcallerbot"}
        target="_blank"
        className={styles.launchButton}
        onClick={handleLaunch}
      >
        Continue
      </a>
    </div>
  );
}
