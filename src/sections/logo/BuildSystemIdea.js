import React from 'react'
import Image from "next/image";

const BuildSystemIdea = () => {
  return (
    <div className='flex'>
      <div className='width-50'>
        <Image src='/img1.png' width={815} height={550} />
        <span className='width-90'>
          логотип школ строится на двух главных образах, это
          книги и герба. эти предметы первые приходят на ум при
          упоминании школы.
        </span>
      </div>
      <div className='width-50'>
        <Image src='/img2.png' width={815} height={550} />
        <span className='width-90'>
          книга это основа знании, а герб добавляет академичности
          к образу школы.
        </span>
      </div>
    </div>
  )
}

export default BuildSystemIdea
