import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import Loading from './Loading'
const Details = () => {
    const param = useParams()
    const { loading,data } = useContext(AuthContext)
    const event=data.find(el=>(el.id==param.id))
    return (
        
        <div className='my-[50px]'>
            <div className='flex justify-center'>
                <img src={"."+event.image} alt="" />
            </div>
            <h1 className='text-center text-[2rem] font-bold'>{event.title}</h1>
            <h1 className='text-center text-[1.5rem] font-bold'>{event.description}</h1>
            <h1 className='text-center text-[1.5rem] font-bold'>Location: {event.division}</h1>
            <h1 className='text-center text-[1.25rem] font-bold'>Status: <span className={event.status=="Ongoing"?'btn btn-success text-[1.25rem] font-bold text-black':'btn btn-warning text-[1.25rem] font-bold text-black'}>{event.status}</span> </h1>
            <h1 className='text-center text-[1.25rem] font-bold' >Contact: {event.contactInfo}</h1>
            <div className='flex justify-center'><NavLink to={"/donate/"+event.id} className={"btn btn-primary"}>Donate</NavLink></div>
        </div>
    );
};

export default Details;