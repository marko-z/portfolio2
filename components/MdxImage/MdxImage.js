import Image from "next/image"
import styles from "./MdxImage.module.css"

export default function MdxImage({ src }) {
  return (
    <div className={styles.imageWrapper}>
      <Image src={src} layout="fill" objectFit="contain" alt="Illustration of the app" />
    </div>
    )
}