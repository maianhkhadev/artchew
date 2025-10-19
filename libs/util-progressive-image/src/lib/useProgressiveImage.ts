import { useEffect, useState } from 'react';

export const useProgressiveImage = (sources: string[]) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    sources.forEach((url) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        setSrc(url);
      };
    });
  }, []);

  return src;
};

export default useProgressiveImage;
