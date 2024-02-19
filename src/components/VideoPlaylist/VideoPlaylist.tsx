import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./VideoPlaylist.module.scss";
import { useActiveCategory } from "@/context/CategoryContext";

interface VideoPlaylistProps {
  category: string;
}

const videoIdsMap: { [key: string]: string[] } = {
  marketing: [
    "FcIjXLWR0zY?si=6xzhF6d3MbxDY0Mb",
    "xfL_DSveFZE?si=UVlWKShfFm6R9J8E",
  ],
  "legal-advice": [
    "KVAch8qa0QA?si=VTrCT_TvwZiWEUy0",
    "U3pn6vkti8k?si=H1QwKhzOOlkVY2-S",
  ],
  "finding-your-audience": [
    "xJ0yE88ldL4?si=sSfQw7u0NM_VIAlz",
    "Edx2BSTnB8U?si=WQpvphorDtlTQwQF",
  ],
};

const VideoPlaylist: FC<VideoPlaylistProps> = () => {
  const { activeCategory } = useActiveCategory();
  const videoIds: string[] = videoIdsMap[activeCategory] || [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.videoPlaylist}>
        {videoIds.map((videoId, index) => (
          <motion.div
            key={videoId}
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, delay: index === 1 ? 1 : index * 0.1 }}
            style={{ width: "100%" }}
          >
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlaylist;
