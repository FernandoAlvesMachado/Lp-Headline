import React from 'react';
import Image from 'next/image';
import speening from '@/app/Assets/name spin.png'
import icon from '@/app/Assets/Icon.png'


const Sun = () => {
  return (
    <div className='relative'>

      <Image className='animate-spin absolute' width={500} src={speening} alt="name" />
      <Image  width={90} src={icon} alt="icon" className="absolute  translate-x-36 translate-y-32" />
    </div>
  );
};

export default Sun;