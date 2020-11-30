import React from 'react';
import Image from "next/image";

const WhiteFolder = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        210х297мм<br/>
        <span className='text-gray'>бумага</span><br/>
        300гр<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img45.png' width={900} height={600}/>
    </div>
  );
};

export default WhiteFolder;