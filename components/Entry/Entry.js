import styles from './Entry.module.css'
import Link from 'next/link'
export default function Entry(props) {
  return <li className={styles.listitem}><Link href={props.href}><div>{props.text1} {props.text2}</div></Link></li>
}

// style={{ background: `white url(${props.imgsrc}) center no-repeat` }}