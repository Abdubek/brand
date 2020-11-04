import React from 'react'
import Image from "next/image";

const TypesOfLogo2 = () => {
  return (
    <div>
      <div className='row mb-50'>
        <div className='col-3'>
          школы делятся на специализации. в зависимости от него нужно подобрать свою иконку.
        </div>
        <div className='col-3'>
          <Image src='/img6.png' width={130} height={190} />
        </div>
        <div className='col-3'>
          <Image src='/img7.png' width={130} height={220} />
        </div>
        <div className='col-3'>
          <Image src='/img8.png' width={190} height={190} />
        </div>
      </div>
      <div className='row'>
        <div className='col-3' />
        <div className='col-3'>
          <Image src='/img9.png' width={150} height={220} />
        </div>
        <div className='col-3'>
          <Image src='/img10.png' width={140} height={216} />
        </div>
        <div className='col-3'>
          <Image src='/img11.png' width={128} height={214} />
        </div>

      </div>
    </div>
  )
}

export default TypesOfLogo2
