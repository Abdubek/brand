import React from 'react';
import Image from "next/image";

const Case = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        уф<br/>
        шелкография<br/>
        тампопечать<br/>
      </div>
      <Image src='/img76.png' width={694} height={713}/>
      <div />
    </div>
  );
};

export default Case;