import React from 'react';
import Image from "next/image";

const EcoBag = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        340x400мм<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 300гр<br/>
        <span className='text-gray'>печать</span><br/>
        шелкография<br/>
        прямая печать<br/>
      </div>
      <Image src='/img69.png' width={928} height={600}/>
      <div />
    </div>
  );
};

export default EcoBag;