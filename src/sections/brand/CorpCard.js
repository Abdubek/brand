import React from 'react';
import Image from "next/image";

const CorpCard = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        90х50мм<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 300гр<br/>
        <span className='text-gray'>печать</span><br/>
        цветная<br/>
        <span className='text-gray'>дополнительно</span><br/>
        защитная пленка<br/>
      </div>
      <Image src='/img42.png' width={600} height={600}/>
    </div>
  );
};

export default CorpCard;