import React from 'react';
import Image from "next/image";

const Story = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        90х50<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 300гр<br/>
        <span className='text-gray'>печать</span><br/>
        цветная<br/>
        <span className='text-gray'>дополнительно</span><br/>
        защитная пленка<br/>
      </div>
      <Image src='/img82.png' width={654} height={553}/>
      <div />
    </div>
  );
};

export default Story;