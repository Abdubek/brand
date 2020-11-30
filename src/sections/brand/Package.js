import React from 'react';
import Image from "next/image";

const Package = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        припрес защитная пленка<br/>
        <span className='text-gray'>бумага</span><br/>
        глянец, материал 200 гр.<br/>
      </div>
      <Image src='/img78.png' width={799} height={713}/>
      <div />
    </div>
  );
};

export default Package;