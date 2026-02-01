import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.page}>
      <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.descr}>You can find everything you want in our catalog</p>
        <Link className={css.link} href="/catalog ">View Now</Link>
      </div>
    </div>
  );
}
