import React from 'react';
import Image from "next/image";

const Signboard4 = () => {
    return (
        <div className='space-between'>
            <div style={{width: "320px"}}>примечание <br/> <br/>габаритные размеры козырька, размеры декоративных
                элементов, могут быть изменены в зависимости от размера козырька школы.
            </div>
            <Image src='/img93.png' width={781} height={444}/>
        </div>
    );
};

export default Signboard4;