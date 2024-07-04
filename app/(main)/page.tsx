"use client";
import { AnimeCard } from "@/components/card/Card";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAnimes } from "@/redux/slices/Anime";
export default function Page() {
  const dispatch = useAppDispatch();
  const anime = useAppSelector((state) => state.anime.anime);
  useEffect(() => {
    dispatch(getAnimes());
  }, []);
  return (
    <div className={styles.items}>
      {anime
        ? anime.list.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.names.ru}
              image={anime.posters.medium.url}
              description={anime.description}
              resolution={"1080p"}
              rating={"5.0"}
            />
          ))
        : "Загрузка"}
    </div>
  );
}
