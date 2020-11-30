import React from 'react';
import Image from "next/image";

const Poster = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        297x420мм А3<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 150гр<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img55.png' width={435} height={600}/>
      <div></div>
    </div>
  );
};

export default Poster;