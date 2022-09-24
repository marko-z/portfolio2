import styles from './Entry.module.css'
import Link from 'next/link'
export default function Entry(props) {
  return <Link href={props.href}>
          <li style={{ backgroundImage: `url(${props.imgsrc})` }} className={styles.listitem}>
            <span className={styles.code}>{props.title} {props.summary}</span>
          </li>
        </Link>
}

// style={{ background: `white url(${props.imgsrc}) center no-repeat` }}
