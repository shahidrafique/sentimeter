import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function Animation() {
  const { rive, RiveComponent } = useRive({
    src: "/rive/sentimeter.riv",
    autoplay: true,
    // autoplay: true,
    layout: new Layout({
      alignment: Alignment.Center,
      fit: Fit.Cover,
    }),
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
