import React from 'react';
import Image from "next/image";

const Diary = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        уф<br/>
        <span className='text-gray'>размер</span><br/>
        148x210мм А5<br/>
      </div>
      <Image src='/img77.png' width={694} height={713}/>
      <div />
    </div>
  );
};

export default Diary;