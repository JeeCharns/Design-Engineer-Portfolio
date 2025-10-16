import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex flex-col md:flex-row md:space-x-2">
        <li>
          <Link href="/" className={`${styles.link} inline md:hidden`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/about/projects" className={styles.link}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className={styles.link}>
            {" "}
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
