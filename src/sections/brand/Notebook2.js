import React from 'react';
import Image from "next/image";

const Notebook2 = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        90х50мм<br/>
        <span className='text-gray'>бумага</span><br/>
        colotech 300гр (обложка)<br/>
        colotech 100гр (листы)<br/>
        <span className='text-gray'>листы</span><br/>
        50 штук<br/>
        <span className='text-gray'>печать</span><br/>
        1+0 (черный цвет)<br/>
        <span className='text-gray'>дополнительно</span><br/>
        защитная пленка<br/>
        припрес
      </div>
      <Image src='/img53.png' width={800} height={600}/>
    </div>
  );
};

export default Notebook2;