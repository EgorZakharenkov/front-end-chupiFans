// Import necessary modules and types
import React, { useState } from "react";
import { PlayerCustom, List } from "@/types/anime.types"; // Adjust the import path as per your project structure
import styles from "./style.module.scss";
import ReactPlayer from "react-player";

const AnimePlayer: React.FC<{
  player: PlayerCustom;
}> = ({ player }) => {
  if (!player) return "loading...";

  const [activeEpisode, setActiveEpisode] = useState<number | undefined>(
    player.list[0]?.episode, // Set the initial episode based on the first item in the list
  );
  const [activeQuality, setActiveQuality] = useState<"fhd" | "hd" | "sd">(
    "fhd", // Set the initial quality to FHD (you can adjust this based on your requirements)
  );

  // Handler for episode selection
  const handleEpisodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveEpisode(Number(e.target.value));
  };

  // Handler for quality selection
  const handleQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveQuality(e.target.value as "fhd" | "hd" | "sd");
  };

  // Find the selected episode object
  const selectedEpisode = player.list.find(
    (item) => item.episode === activeEpisode,
  );

  if (!selectedEpisode) return "Episode not found"; // Handle if selected episode is not found
  const link = `https://${player.host}${selectedEpisode.hls.fhd}`;
  console.log(link);
  return (
    <div className={styles.animePlayer}>
      <select
        value={activeEpisode}
        onChange={handleEpisodeChange}
        className={styles.selectEpisode}
      >
        {player.list.map((item) => (
          <option key={item.uuid} value={item.episode}>
            Серия {item.episode}
          </option>
        ))}
      </select>
      <ReactPlayer width={"60%"} height={"auto"} url={link} controls />
    </div>
  );
};

export default AnimePlayer;
