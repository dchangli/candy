"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getCandy = () => {
    // Define the candy data to be sent in the POST request
    const candyData = {
      Amount: 1
    };

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candyData),
    }).catch((error) => {
      console.error("Error fetching candy:", error);
    });
  };

  return (
    <main className={styles.main}>
      <button onClick={(e) => getCandy()}>Get Candy</button>
    </main>
  );
}
