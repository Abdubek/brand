import React from 'react';
import Image from "next/image";

const ColoredFolder = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        90х50мм<br/>
        <span className='text-gray'>бумага</span><br/>
        350гр<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img46.png' width={900} height={600}/>
    </div>
  );
};

export default ColoredFolder;