import Link from "next/link"
import css from "./Header.module.css"
export default function Header() {
  return (
    
    <div className={css.container}>
      <Link href="/" className={css.logo}>
        <svg className="logo-icon" width="136" height="16">
          <use href="/sprite.svg#icon-Logo-1"></use>
        </svg>
      </Link>
      <ul className={css.list}>
        <li>
          <Link className={css.nav} href="/">Home</Link>
        </li>
        <li>
          <Link className={css.nav} href="/catalog">Catalog</Link>
        </li>
      </ul>
    </div>
  )

}