import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import Loading from './Loading'
import { toast, ToastContainer } from 'react-toastify';
const Donate = () => {
    const param = useParams()
    const { loading, data, user } = useContext(AuthContext)
    const event = data.find(el => (el.id == param.id))
    const navigate=useNavigate()
    const notify = (e) => {
        e.preventDefault()
        toast("Thank you ! We will reach your destination soon")
        
    };
    return (
        <div className='my-[50px]'>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='flex justify-center'>
                <img src={"." + event.image} alt="" />
            </div>
            <h1 className='text-center text-[2rem] font-bold'>{event.title}</h1>
            <h1 className='text-center text-[1.5rem] font-bold'>{event.description}</h1>
            <h1 className='text-center text-[1.5rem] font-bold'>Location: {event.division}</h1>
            <h1 className='text-center text-[1.25rem] font-bold'>Status: <span className={event.status == "Ongoing" ? 'btn btn-success text-[1.25rem] font-bold text-black' : 'btn btn-warning text-[1.25rem] font-bold text-black'}>{event.status}</span> </h1>
            <h1 className='text-center text-[1.25rem] font-bold' >Contact: {event.contactInfo}</h1>
            <div className='flex justify-center'>
                <form action="" className='my-[50px]' onSubmit={notify}>
                    <h1 className="text-center font-bold text-xl text-black border-[2px] border-solid border-black rounded-2xl p-[10px]">Donation Information</h1>
                    <hr className='my-[15px]'/>
                    <label className="fieldset-label font-bold text-xl text-black">Quantity of items:</label>
                    <input type="number" required className="input my-[5px] font-bold text-[1.25rem] text-black" placeholder="Quantity of items (e.g., 2 jackets, 3 blankets) 
" />
                    <label className="fieldset-label font-bold text-xl text-black">Item type:</label>
                    <input type="text" required  className="input my-[5px] font-bold text-[1.25rem] text-black" placeholder="item type (e.g., blanket, jacket, sweater).
"/>
                    <label className="fieldset-label font-bold text-xl text-black">Pickup location:</label>
                    <input type="text" required  className="input my-[5px] font-bold text-[1.25rem] text-black" placeholder="Pickup location(e.g. House 12, Road 5, Dhanmondi, Dhaka)
"/>
                    <label className="fieldset-label font-bold text-xl text-black">Additional notes:</label>
                    <input type="text" className="input my-[5px] font-bold text-[1.25rem] text-black" placeholder="Additional notes (optional).

"/>
                    <div></div>
                    <button className="btn btn-neutral mt-4">Donate</button>
                </form>
            </div>
        </div>
    );
};

export default Donate;