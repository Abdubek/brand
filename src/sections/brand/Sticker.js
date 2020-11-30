import React from 'react';
import Image from "next/image";

const Sticker = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        цифровая<br/>
      </div>
      <Image src='/img79.png' width={884} height={713}/>
      <div />
    </div>
  );
};

export default Sticker;