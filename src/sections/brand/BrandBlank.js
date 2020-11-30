import React from 'react';
import Image from "next/image";

const BrandBlank = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        210х297мм A4<br/>
      </div>
      <Image src='/img43.png' width={800} height={600}/>
    </div>
  );
};

export default BrandBlank;