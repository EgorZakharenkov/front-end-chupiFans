"use client";
import { AnimeCard } from "@/components/card/Card";
import React, { useEffect, useState } from "react";
import { AnimeList } from "@/types/anime.types";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAnimes } from "@/redux/slices/Anime";
import { RootState } from "@/redux/store";
export default function Page() {
  const dispatch = useAppDispatch();
  const anime = useAppSelector((state) => state.anime.anime);
  console.log(anime);
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
        : "ЗАгрузка"}
    </div>
  );
}
