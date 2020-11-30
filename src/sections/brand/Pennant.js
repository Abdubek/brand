import React from 'react';
import Image from "next/image";

const Pennant = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        90x50мм<br/>
        <span className='text-gray'>материал</span><br/>
        атлас<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img61.png' width={658} height={600}/>
    </div>
  );
};

export default Pennant;