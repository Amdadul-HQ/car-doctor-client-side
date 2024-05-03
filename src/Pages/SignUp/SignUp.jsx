import { Link } from 'react-router-dom';
import pic from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../../Context/ContextComponent';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser , updatePerson } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const repate_password = form.repate_password.value;

        if(password === repate_password && password.length > 6){
            createUser(email,password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: "success",
                    title: "Good Job",
                    text: "User Created Successful!",
                })    
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}}`,
                  });
            })
        }else if(password !== repate_password){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Does't Match!",
              });
        }
        else if(password.length < 6){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Should be More Then 6 Characters!",
              });
        }


    }

    return (
        <section className='flex max-w-screen-xl mx-auto items-center'>
            <div className='w-1/2'>
                <img src={pic} alt="" />
            </div>
            <div className='w-1/2 px-20 border py-28'>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-4xl text-center text-[#444] font-semibold'>Sign Up</h1>
                    <div className='mt-4 space-y-2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='name'>Name</label>
                        <br />
                        <input  type="text" name='name' placeholder="Enter Name here" id='name' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='email'>Email</label>
                        <br />
                        <input  type="email" name='email' placeholder="Enter Email here" id='email' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='password'>Password</label>
                        <br />
                        <input  type="password" name='password' placeholder="Enter password here" id='password' className="input py-4 input-bordered w-full" required/>
                    </div>
                    <div className='mt-4 space-y-2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='repate_password'>Confirm Password</label>
                        <br />
                        <input  type="password" name='repate_password' placeholder="Enter Confirm Password" id='repate_password' className="input py-4 input-bordered w-full" required/>
                    </div>
                    <div>
                        <button type='submit' className='w-full bg-transparent font-semibold hover:text-white hover:border-white transition-all duration-300 hover:bg-orange py-4 border border-orange mt-5 rounded-lg text-xl text-orange'>Sign Up</button>
                    </div>
                </form>
            <div>
                    <p className='text-lg font-medium text-center mt-6'>Or Sign In With</p>
                    <div className='flex gap-x-6 mt-6 justify-center'>
                    <button className='p-6 rounded-full border bg-[#F5F5F8] text-blue-500'><FaFacebookF /></button>
                    <button className='p-6 rounded-full border bg-[#F5F5F8] text-blue-500'><FaLinkedinIn /></button>
                    <button className='p-6 rounded-full border bg-[#F5F5F8] text-blue-500'><FaGoogle /></button>
                    </div>
                    <div className='text-center mt-4'>
                        <Link to='/login' className='text-[#444] text-lg font-normal text-center'>Already have an account? <span className='text-orange font-medium'>Login</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;