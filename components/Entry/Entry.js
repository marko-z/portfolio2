import styles from './Entry.module.css'
import Link from 'next/link'
export default function Entry(props) {
  return <Link href={props.href}>
          <li className={styles.listitem}>
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${props.imgsrc})`}}></div>
            <span className={styles.code}>{props.title} {props.summary}</span>
          </li>
        </Link>
}

// style={{ background: `white url(${props.imgsrc}) center no-repeat` }}
