import React from 'react';
import Image from "next/image";

const Clock = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        уф<br/>
      </div>
      <Image src='/img75.png' width={694} height={713}/>
      <div />
    </div>
  );
};

export default Clock;