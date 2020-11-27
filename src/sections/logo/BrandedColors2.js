import React from 'react'

const BrandedColors2 = () => {
  return (
    <div>
      <p className='mb-50' style={{width: '50%'}}>
        так же школы к основному цвету могут выбрать дополнительный яркий оттенок. самое главное,
        выбраный цвет должен контрастировать с основой.
      </p>
      <div className='flex-around' style={{
        background: '#EBC818',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 4 19 100 0</span>
        <span>rgb 247 202 0</span>
        <span>hex F7CA00</span>
        <span>ral 080 80 80</span>
      </div>

      <div className='flex-around' style={{
        background: '#C83C3A',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 0 87 76 0</span>
        <span>rgb 231 58 56</span>
        <span>hex E73A38</span>
        <span style={{ width: 100 }} />
      </div>

      <div className='flex-around' style={{
        background: '#D3721D',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 0 64 99 0</span>
        <span>rgb 238 115 7</span>
        <span>hex EE7307</span>
        <span>ral 060 70 70</span>
      </div>

      <div className='flex-around' style={{
        background: '#9FBE38',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 51 0 100 0</span>
        <span>rgb 145 192 32</span>
        <span>hex 91C020</span>
        <span>ral 120 70 75</span>
      </div>

      <div className='flex-around' style={{
        background: '#598598',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 74 30 30 10</span>
        <span>rgb 59 134 154</span>
        <span>hex 3B869A</span>
        <span>ral 230 50 40</span>
      </div>

      <div className='flex-around' style={{
        background: '#62AEA4',
        height: '84px',
        marginBottom: '14px',
        color: '#ffffff'
      }}>
        <span>cmyk 75 1 41 0</span>
        <span>rgb 0 175 165</span>
        <span>hex 00AFA5</span>
        <span>ral 200 60 40</span>
      </div>


    </div>
  )
}

export default BrandedColors2
