import React from 'react';
import Image from "next/image";

const Flag = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        2000x1000мм<br/>
        <span className='text-gray'>материал</span><br/>
        флажная ткань<br/>
      </div>
      <Image src='/img56.png' width={785} height={600}/>
    </div>
  );
};

export default Flag;