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
          <Image src='/img14.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>
            общеобразовательные<br/><br/>

            cmyk 82 45 84 50<br/>
            rgb 40 73 46<br/>
            hex 28492e<br/>
            ral 6035<br/>
            pantone 553 C
          </span>
        </div>
        <div className="col-3">
          <Image src='/img15.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>
            лицеи и гимназии<br/><br/>

            cmyk 100 85 42 40<br/>
            rgb 26 43 74<br/>
            hex 1A2B4A<br/>
            ral 5013<br/>
            pantone 289 C
          </span>
        </div>
        <div className="col-3">
          <Image src='/img12.svg' width={280} height={260} />
          <span style={{display: 'block', textAlign: 'center', marginTop: '32px'}}>
            особые<br/><br/>

            cmyk 57 97 41 61<br/>
            rgb 73 20 49<br/>
            hex 491431<br/>
            ral 4007<br/>
            pantone 7421 C
          </span>
        </div>
      </div>
    </div>
  )
}

export default BrandedColors
