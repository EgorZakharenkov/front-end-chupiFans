import React from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";

interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  rating?: string;
  resolution?: string;
  description: string;
}
const link = "https://static-libria.weekstorm.one";
const AnimeCard: React.FC<AnimeCardProps> = ({
  id,
  title,
  image,
  rating,
  resolution,
  description,
}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/anime/${id}`)} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={`https://static-libria.weekstorm.one${image}`}
          alt={title}
          className={styles.image}
        />
        <div className={styles.hoverContent}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <span className={`${styles.score} ${styles.green}`}>{rating}</span>
          <span className={`${styles.quality} ${styles.red}`}>
            {resolution}
          </span>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default AnimeCard;

export { AnimeCard };
