import React from 'react'
import Image from "next/image";

const BrandedColors = () => {
  return (
    <div>
      <p className='mb-50' style={{width: '50%'}}>
        школы в зависимости от специализации имеют четыре цвета, которые будут базами для фирменных носителей
      </p>
      <div className='row'>
        <div className="col-3">
          <Image src='/img12.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>особые</span>
        </div>
        <div className="col-3">
          <Image src='/img13.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>средние</span>
        </div>
        <div className="col-3">
          <Image src='/img14.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>инновационные</span>
        </div>
        <div className="col-3">
          <Image src='/img15.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>одаренные</span>
        </div>
      </div>
    </div>
  )
}

export default BrandedColors
