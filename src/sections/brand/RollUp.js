import React from 'react';
import Image from "next/image";

const RollUp = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        2000x800мм<br/>
        <span className='text-gray'>материал</span><br/>
        баклит<br/>
      </div>
      <Image src='/img59.png' width={455} height={600}/>
      <div />
    </div>
  );
};

export default RollUp;