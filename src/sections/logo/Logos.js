import React from 'react';
import Image from "next/image";

const Logos = () => {
  return (
    <div className='center' style={{ paddingTop: 70 }}>
      <Image src='/img28.png' unsized={true} className='width-100' />
    </div>
  );
};

export default Logos;
