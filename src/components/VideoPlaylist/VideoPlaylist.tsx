import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./VideoPlaylist.module.scss";
import { useActiveCategory } from "@/context/CategoryContext";

interface VideoPlaylistProps {
  category: string;
}

const VideoPlaylist: FC<VideoPlaylistProps> = () => {
  const { activeCategory } = useActiveCategory();
  let videoIds: string[] = [];

  switch (activeCategory) {
    case "marketing":
      videoIds = [
        "FcIjXLWR0zY?si=6xzhF6d3MbxDY0Mb",
        "xfL_DSveFZE?si=UVlWKShfFm6R9J8E",
      ];
      break;
    case "legal-advice":
      videoIds = [
        "KVAch8qa0QA?si=VTrCT_TvwZiWEUy0",
        "U3pn6vkti8k?si=H1QwKhzOOlkVY2-S",
      ];
      break;
    case "finding-your-audience":
      videoIds = [
        "xJ0yE88ldL4?si=sSfQw7u0NM_VIAlz",
        "Edx2BSTnB8U?si=WQpvphorDtlTQwQF",
      ];
      break;
    default:
      break;
  }

  return (
    <div className={styles.wrapper}>
      <h2>
        About <span className={styles.category}>{activeCategory}</span>
      </h2>
      <div className={styles.videoPlaylist}>
        {videoIds.map((videoId, index) => (
          <motion.div
            key={videoId}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, delay: index === 1 ? 1 : index * 0.1 }}
            style={{ width: "100%" }}
          >
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlaylist;
