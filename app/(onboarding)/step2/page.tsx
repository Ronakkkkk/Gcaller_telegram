'use client';

import Image from "next/image";
import styles from "./step2.module.css";

export default function Step1Page() {
  

  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
   
            
      
            <div>
              <Image
                src={"/icons/onboarding/onbo4.png"}
                alt={`Redirect to bot`}
                width={355}
                height={355}
                className={styles.icon}
              />
              
              <p className={styles.description}>{"Continue to the CallNetwork Bot that allows you to import contacts and farm your $Call."}</p>
            </div>
        
     

      

      <button className={styles.launchButton}>Continue</button>
    </div>
  );
}