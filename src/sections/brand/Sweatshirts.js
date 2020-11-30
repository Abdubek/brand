import React from 'react';
import Image from "next/image";

const Sweatshirts = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        сублимация<br/>
        флекс<br/>
        шелкография<br/>
      </div>
      <Image src='/img73.png' width={714} height={713}/>
      <div />
    </div>
  );
};

export default Sweatshirts;