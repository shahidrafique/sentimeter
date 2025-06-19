"use client";

import Image, { ImageProps } from "next/image";

interface ScaledImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  width: number;
  height?: number;
  min?: number; // Optional min width in px
  max?: number; // Optional max width in px
}

const BASE_SCREEN_WIDTH = 1920;

export default function ScaledImage({
  width,
  height,
  alt,
  className = "",
  style = {},
  min,
  max,
  ...rest
}: ScaledImageProps) {
  const minWidth = min ?? width - width * 0.3; // 5% smaller than original width
  const maxWidth = max ?? width + width * 0.05; // 5% larger than original width
  const preferred = (width / BASE_SCREEN_WIDTH) * 100;
  const fluidWidth = `clamp(${minWidth}px, ${preferred}vw, ${maxWidth}px)`;

  return (
    <Image
      {...rest}
      unoptimized={true}
      alt={alt}
      width={width}
      height={height ?? width}
      className={`auto-scaled-img ${className}`}
      style={{
        ...style,
        width: fluidWidth,
        height: "auto",
        objectFit: "contain",
        maxWidth: "100%",
      }}
    />
  );
}
