
import { useEffect, useState } from 'react';

const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-patterns-12772-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-metropolis-at-night-with-colorful-lights-40734-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-wavy-animated-colors-on-a-dark-background-35421-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-magenta-sunset-seen-from-the-sea-4329-large.mp4",
];

const BackgroundVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');
  
  useEffect(() => {
    // Randomly select a video
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoUrl(randomVideo);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default BackgroundVideo;
