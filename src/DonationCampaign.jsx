import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import Loading from 'daisyui/components/loading';
import { NavLink } from 'react-router-dom';

const DonationCampaign = () => {
    const {loading,data } = useContext(AuthContext)
    if(loading){
        <Loading></Loading>
        return
    }
    if(!data){
        <Login></Login>
        return
    }
    return (
        <div>
            {/* <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                {
                    data.map(el=>
                        <div className="carousel-item">
                            <img src={el.image} alt="" />
                        </div>
                    )
                }
            </div> */}
            {/* <Slider></Slider>
            <About></About> */}
        <div className="flex flex-wrap justify-evenly">
            {
                data.map(el =>
                    <div className=''>
                        <div>
                        <div className="flex justify-center p-[10px]"><img src={el.image} alt="" className="rounded-2xl border-0 w-[250px] h-[250px]" /></div>
                        <h1 className="text-center font-bold text-[1.25rem]">{el.title}</h1>
                        <div className='flex justify-center'>
                            <h1 className="w-[90%] text-wrap font-bold text-center">{el.description}</h1>
                        </div>
                        <h1 className="flex justify-center font-bold">Status    : {el.status}</h1>
                        <h1 className="text-center font-bold">Contact info: {el.contactInfo}</h1>
                        <h1 className="text-center font-bold">Division: {el.division}</h1>
                        <div className="flex flex-wrap justify-center gap-[10px]">
                            <NavLink to={`/viewmore/`+el.id}  className="btn btn-primary text-white">View More</NavLink>
                            <NavLink to={"/donate/"+el.id} className="btn btn-warning text-black">Donate Now</NavLink>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default DonationCampaign;