import React from 'react'
import Image from "next/image";

const TypesOfLogo = () => {
  return (
    <div className='row'>
      <div className='col-3'>
        школы имеют несколько видов логотипа. каждый из них может использоваться в зависимости от задачи.
      </div>
      <div className='col-9'>
        <Image src='/img5.png' width={830} height={300} />
      </div>
    </div>
  )
}

export default TypesOfLogo
