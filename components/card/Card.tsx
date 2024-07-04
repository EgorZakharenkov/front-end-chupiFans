import React from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
  console.log(description);
  const truncatedDescription = description
    ? description.split(" ").slice(0, 25).join(" ")
    : "Нет описания...";

  return (
    <div onClick={() => router.push(`/anime/${id}`)} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={`${link}${image}`}
          alt={title}
          className={styles.image}
          width={300}
          height={180}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.rating}>{rating}</div>
        <div className={styles.quality}>{resolution}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{truncatedDescription}...</div>
    </div>
  );
};

export default AnimeCard;

export { AnimeCard };
