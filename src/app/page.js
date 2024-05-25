import Image from "next/image";
import styles from "./page.module.css";
import Category from "@/components/category/Category";
import Card from "@/components/card/Card";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
        <Card/>
        <Category/>
    </main>
  );
}
