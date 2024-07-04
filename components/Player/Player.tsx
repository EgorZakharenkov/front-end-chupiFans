import React, { useState } from "react";
import { PlayerCustom } from "@/types/anime.types"; // Adjust the import path as per your project structure
import styles from "./style.module.scss";
import ReactPlayer from "react-player";

const AnimePlayer: React.FC<{
  player: PlayerCustom;
}> = ({ player }) => {
  const [activeEpisode, setActiveEpisode] = useState<number>(
    player.list[0]?.episode,
  );
  const [quality, setQuality] = useState<string>("fhd");

  if (!player) return "loading...";

  const handleEpisodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveEpisode(Number(e.target.value));
  };

  const handleQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuality(e.target.value);
  };

  const selectedEpisode = player.list.find(
    (item) => item.episode === activeEpisode,
  );

  if (!selectedEpisode) return "Episode not found";

  const qualityLinkMap: { [key: string]: string } = {
    fhd: selectedEpisode.hls.fhd,
    hd: selectedEpisode.hls.hd,
    sd: selectedEpisode.hls.sd,
  };

  const link = `https://${player.host}${qualityLinkMap[quality]}`;
  console.log(link);

  return (
    <div className={styles.animePlayer}>
      <div className={styles.controls}>
        <select
          value={activeEpisode}
          onChange={handleEpisodeChange}
          className={styles.selectEpisode}
        >
          {player.list.map((item) => (
            <option
              key={item.uuid}
              value={item.episode}
              className={styles.selectEpisode__option}
            >
              Серия {item.episode}
            </option>
          ))}
        </select>
        <select
          value={quality}
          onChange={handleQualityChange}
          className={styles.selectQuality}
        >
          <option value="fhd" className={styles.selectQuality__option}>
            1080p
          </option>
          <option value="hd" className={styles.selectQuality__option}>
            720p
          </option>
          <option value="sd" className={styles.selectQuality__option}>
            480p
          </option>
        </select>
      </div>
      <ReactPlayer width={"100%"} height={"auto"} url={link} controls />
    </div>
  );
};

export default AnimePlayer;
