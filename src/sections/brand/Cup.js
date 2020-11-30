import React from 'react';
import Image from "next/image";

const Cup = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        сублимация<br/>
      </div>
      <Image src='/img80.png' width={992} height={713}/>
      <div />
    </div>
  );
};

export default Cup;