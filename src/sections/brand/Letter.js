import React from 'react';
import Image from "next/image";

const Letter = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        297х210мм A4<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 300гр<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img48.png' width={900} height={600}/>
    </div>
  );
};

export default Letter;