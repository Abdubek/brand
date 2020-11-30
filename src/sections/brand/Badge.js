import React from 'react';
import Image from "next/image";

const Badge = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        гравировка<br/>
        покраска<br/>
      </div>
      <Image src='/img68.png' width={928} height={600}/>
      <div />
    </div>
  );
};

export default Badge;