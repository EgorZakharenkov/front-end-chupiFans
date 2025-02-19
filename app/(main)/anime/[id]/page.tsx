"use client";
import React, { useEffect, useState } from "react";
import { List } from "@/types/anime.types";
import { getCurrentAnime } from "@/api";
import styles from "./style.module.scss";
import AnimePlayer from "@/components/Player/Player";

export default function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const [anime, setAnime] = useState<List | null>(null);

  useEffect(() => {
    getCurrentAnime(params.id).then(({ data }) => {
      setAnime(data);
    });
  }, [params.id]);

  if (!anime) return <div>Loading...</div>;
  return (
    <div className={styles.animePage}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img
            src={`https://static-libria.weekstorm.one${anime.posters.medium.url}`}
            alt={anime.names.ru}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{anime.names.ru}</h1>
          <p className={styles.description}>{anime.description}</p>
          <div className={styles.genres}>
            {anime.genres.map((genre, index) => (
              <span key={index} className={styles.genre}>
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.player}>
        <AnimePlayer player={anime.player} />
      </div>
    </div>
  );
}
