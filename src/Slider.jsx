import React, { useContext, useEffect } from 'react';
import SliderButtons from './SliderButtons';
import { AuthContext } from './Authprovider';
import { NavLink, useLoaderData } from 'react-router-dom';

const Slider = () => {
    const {data}=useContext(AuthContext)
    return (
        <div className='w-[90%] px-[2%] m-auto my-[25px] border-[5px] border-solid border-black'>
            <div className="carousel w-full">
                {
                    data.map(el =>
                        <div id={`item` + el.id} className="carousel-item w-full items-center">
                            <img
                                src={el.image}
                                className="w-[50%] " />
                            <div>
                                <h1 className="text-center font-bold text-[1.25rem]">{el.title}</h1>
                                <div className='flex justify-center'>
                                    <h1 className="w-[90%] text-wrap font-bold text-center">{el.description}</h1>
                                </div>
                                <h1 className="flex justify-center font-bold">Status    : {el.status}</h1>
                                <h1 className="text-center font-bold">Contact info: {el.contactInfo}</h1>
                                <h1 className="text-center font-bold">Division: {el.division}</h1>
                                <div className="flex flex-wrap justify-center gap-[10px]">
                                    <NavLink to={`/viewmore/` + el.id} className="btn btn-primary text-white">View More</NavLink>
                                    <NavLink to={"/donate/" + el.id} className="btn btn-warning text-black">Donate Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <SliderButtons></SliderButtons>
            </div>
        </div>
    );
};

export default Slider;