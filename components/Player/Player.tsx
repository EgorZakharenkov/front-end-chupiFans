import React, { useState } from "react";
import { PlayerCustom } from "@/types/anime.types"; // Adjust the import path as per your project structure
import styles from "./style.module.scss";
import ReactPlayer from "react-player";

const AnimePlayer: React.FC<{
  player: PlayerCustom;
}> = ({ player }) => {
  // Initialize state unconditionally
  const [activeEpisode, setActiveEpisode] = useState<number | undefined>(
    player.list[0]?.episode,
  );

  // Ensure player exists before rendering
  if (!player) return "loading...";

  // Event handler for episode selection
  const handleEpisodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveEpisode(Number(e.target.value));
  };

  // Find the selected episode object
  const selectedEpisode = player.list.find(
    (item) => item.episode === activeEpisode,
  );

  // Handle if selected episode is not found
  if (!selectedEpisode) return "Episode not found";

  // Construct video link
  const link = `https://${player.host}${selectedEpisode.hls.fhd}`;
  console.log(link);

  // Render component with selected episode
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
