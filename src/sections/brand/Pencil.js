import React from 'react';
import Image from "next/image";

const Pencil = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        уф<br/>
      </div>
      <Image src='/img51.png' width={800} height={600}/>
    </div>
  );
};

export default Pencil;