import React from 'react';
import Image from "next/image";

const BrandedFont2 = () => {
  return (
    <div>
      <p className='width-50 mb-50'>
        основным фирменным шрифтом бренда является din round pro. он используется повсеместно на всех рекламных макетах
        для набора заголовков, подзаголовков и других сообщений.
      </p>
      <div className='flex mb-50'>
        <p className='width-25 mt-0'>
          din round pro medium
          <br/><br/>
          <strong>титульный</strong><br/>
          для набора заголовков, слоганов, акцентного блока внутри основного текста
        </p>
        <div className='ml-20'>
          <Image src='/img19.png' width={550} height={154} />
        </div>
      </div>
      <div className='flex'>
        <p className='width-25 mt-0'>
          din round pro light
          <br/><br/>
          <strong>текстовый</strong><br/>
          для набора основных текстовых блоков
        </p>
        <div className='ml-20'>
          <Image src='/img20.png' width={550} height={154} />
        </div>
      </div>
    </div>
  );
};

export default BrandedFont2;