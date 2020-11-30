import React from 'react';
import Image from "next/image";

const Post = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>размер</span><br/>
        1080х1080<br/>
      </div>
      <Image src='/img81.png' width={747} height={736}/>
      <div />
    </div>
  );
};

export default Post;