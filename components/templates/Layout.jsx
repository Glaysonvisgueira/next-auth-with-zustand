import styles from "@/styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.layoutTemplate}>
        <Link href="/home">HOME</Link>
        <Link href="/zustand">ZUSTAND</Link>
      </div>
      {children}
    </div>
  );
}
