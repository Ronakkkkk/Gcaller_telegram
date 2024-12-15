"use client";

import Image from "next/image";
import styles from "./step3.module.css";
import Link from "next/link";

export default function Step1Page() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>

      <div>
        <h1 className={styles.title}>{"Sucess Full!"}</h1>
        <Image
          src={"/icons/onboarding/onbo5.png"}
          alt={`Redirect to bot`}
          width={308}
          height={308}
          className={styles.icon}
        />

        <p className={styles.description}>{"Contacts Imported Successfully."}</p>
      </div>

      <Link href="/" className={styles.launchButton}>
        Continue To App
      </Link>
    </div>
  );
}
