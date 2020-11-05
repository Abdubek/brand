import React from 'react';
import Image from "next/image";

const IllegalUse = () => {
  return (
    <div>
      <div className='row'>
        <div className="col-6">
          <Image src='/img23.png' unsized={true} className='width-100' />
          <span className='inline-block mb-10'>
            запрещается изменять последовательность применения цветов
          </span>
        </div>
        <div className="col-6">
          <Image src='/img24.png' unsized={true} className='width-100' />
          <span className='inline-block mb-10'>
            запрещается изменять цвета логотипа
          </span>
        </div>
      </div>
      <div className='row'>
        <div className="col-6">
          <Image src='/img25.png' unsized={true} className='width-100' />
          <span className='inline-block mb-10'>
            запрещается изменение пропорций элементов, увеличение или уменьшение отдельных элементов знака
          </span>
        </div>
        <div className="col-6">
          <Image src='/img26.png' unsized={true} className='width-100' />
          <span className='inline-block mb-10'>
            запрещается применение обводок вокруг знака, а также применение эффекта тени к знаку или его составным частям
          </span>
        </div>
      </div>
    </div>
  );
};

export default IllegalUse;