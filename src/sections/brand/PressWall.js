import React from 'react';
import Image from "next/image";

const PressWall = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        2000x3000мм<br/>
        <span className='text-gray'>конструкция</span><br/>
        хром труба<br/>
        фермовая (для<br/>
        больших размеров
      </div>
      <Image src='/img58.png' width={785} height={600}/>
    </div>
  );
};

export default PressWall;