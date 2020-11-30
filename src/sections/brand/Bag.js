import React from 'react';
import Image from "next/image";

const Bag = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        шелкография<br/>
      </div>
      <Image src='/img72.png' width={714} height={713}/>
      <div />
    </div>
  );
};

export default Bag;