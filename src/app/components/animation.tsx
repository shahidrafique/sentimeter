import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

import { useState, useEffect } from "react";

export default function Animation() {
  const [isAutoplay, setIsAutoplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 676) {
      setIsAutoplay(true);
    }
  }, []);

  const { rive, RiveComponent } = useRive({
    src: "/rive/sentimeter.riv",
    autoplay: isAutoplay,
    layout: new Layout({
      alignment: Alignment.Center,
      fit: Fit.FitWidth,
    }),
  });

  return (
    <RiveComponent
      onMouseEnter={() => {
        if (!isAutoplay && rive) rive.play();
      }}
      onMouseLeave={() => {
        if (!isAutoplay && rive) rive.pause();
      }}
    />
  );
}
