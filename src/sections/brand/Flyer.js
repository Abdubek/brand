import React from 'react';
import Image from "next/image";

const Flyer = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        148x210мм А5<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 150гр<br/>
        <span className='text-gray'>печать</span><br/>
        односторонняя<br/>
      </div>
      <Image src='/img54.png' width={435} height={600}/>
      <div></div>
    </div>
  );
};

export default Flyer;