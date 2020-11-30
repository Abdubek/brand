import React from 'react';
import Image from "next/image";

const Convert = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        99х210мм A4<br/>
      </div>
      <Image src='/img44.png' width={900} height={600}/>
    </div>
  );
};

export default Convert;