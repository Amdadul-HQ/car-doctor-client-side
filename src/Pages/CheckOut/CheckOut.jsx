import { useLoaderData } from 'react-router-dom';
import bg from '../../assets/images/checkout/checkout.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Context/ContextComponent';

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const {title,price,service_id,img} = service;
    const handleOrder = e => {
        e.preventDefault()

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName+' '+lastName;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;

        const order = {
            fullName,phone,email,message,title,price,service_id,img
        }

        axios.post('http://localhost:5000/booking',order)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Good Job",
                    text: "Booking Successfully!",
                })
            }
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <section className='max-w-screen-xl mx-auto'>
            <div style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:'16px'
            }} className='h-[300px] w-full flex justify-center items-end' >
                <p className='bg-orange text-lg font-medium text-white rounded-t-xl py-2 px-4 w-fit'>Home/Checkout</p>
            </div>
            <div className='bg-[#F3F3F3] p-24 mt-10 rounded-xl'>
                <form onSubmit={handleOrder} className='space-y-6'>
                    <div className='flex gap-x-5'>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='firstName'>First Name</label>
                        <br />
                        <input  type="text" name='firstName' placeholder="First Name" id='firstName' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='lastName'>Last Name</label>
                        <br />
                        <input  type="text" name='lastName' placeholder="Last Name" id='lastName' className="input py-4 input-bordered w-full" required />
                    </div>
                    </div>
                    <div className='flex gap-x-5'>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='phone'>Your Phone</label>
                        <br />
                        <input  type="tel" name='phone' placeholder="Your Phone" id='phone' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='email'>Your Email</label>
                        <br />
                        <input  type="email" defaultValue={user?.email} name='email' placeholder="Your Email" id='email' className="input py-4 input-bordered w-full" required />
                    </div>
                    </div>
                    <div>
                    <label className='text-[#444] text-lg font-semibold' htmlFor='message'>Your Message</label>
                        <br />
                    <textarea id='message' placeholder="Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                    <div>
                    <button type='submit' className='text-orange py-4 w-full border border-orange rounded-md text-lg font-semibold hover:bg-orange hover:text-white transition duration-300'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckOut;