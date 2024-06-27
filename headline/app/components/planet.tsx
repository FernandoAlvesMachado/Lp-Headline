'use client'
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface PlanetProps {
  diameter: number;
  orbitSize: number;
  rotationSpeed: number;
  imageUrl: string | StaticImageData;
}


const Planet: React.FC<PlanetProps> = ({ diameter, orbitSize, rotationSpeed, imageUrl }) => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 100;
      const angle = time * rotationSpeed * Math.PI / 180;


      const x = orbitSize * Math.cos(angle);
      const y = orbitSize * Math.sin(angle);

      setPositionX(x);
      setPositionY(y);
    }, 10);

    return () => clearInterval(interval);
  }, [orbitSize, rotationSpeed]);

  return (
    <div
    className="planet absolute animate-spin"
    style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `calc(50% - ${diameter / 2}px + ${positionX}px)`,
        top: `calc(50% - ${diameter / 2}px + ${positionY}px)`,
      }}
      >
      <div className="relative w-full bg-black h-full rounded-full shadow-md">
        <Image
          src={imageUrl}
          alt="planet"
          layout="fill"
          objectFit="cover"
          className="rounded-full opacity-65 animate-spin"
        />
      </div>

    </div>
  );
};

export default Planet;
