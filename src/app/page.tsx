import { cookies } from "next/headers";
import styles from "./page.module.css";

export default async function Home() {
  const data = await cookies();
  console.log("[" + new Date().toISOString() + "]", data.toString());

  return <div className={styles.page}>✅ Cookies captured ✅</div>;
}
