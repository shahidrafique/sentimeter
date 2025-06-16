'use client';

import Image, { ImageProps } from 'next/image';

interface ScaledImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  width: number;
  height?: number;
  min?: number; // Optional min width in px
  max?: number; // Optional max width in px
}

const BASE_SCREEN_WIDTH = 1440;

export default function ScaledImage({
  width,
  height,
  alt,
  className = '',
  style = {},
  min = 26,
  max,
  ...rest
}: ScaledImageProps) {
  const finalMax = max ?? width;
  const preferred = (width / BASE_SCREEN_WIDTH) * 100;
  const fluidWidth = `clamp(${min}px, ${preferred}vw, ${finalMax}px)`;

  return (
    <Image
      {...rest}
      alt={alt}
      width={width}
      height={height ?? width}
      className={`auto-scaled-img ${className}`}
      style={{
        ...style,
        width: fluidWidth,
        height: 'auto',
        objectFit: 'contain',
        maxWidth: '100%',
      }}
    />
  );
}
