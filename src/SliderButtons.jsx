import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';

const SliderButtons = () => {
    const {data}=useContext(AuthContext)
    return (
        <div className='flex gap-[5px] flex-wrap justify-center'>
            {
                data.map(el=>
                    <a href={`#item`+el.id} className='btn btn-outline'>{el.id}</a>
                )
            }
        </div>
    );
};

export default SliderButtons;