import { useQuery } from "@tanstack/react-query";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Service = () => {
    const {data} = useQuery({
        queryKey:['service'],
        queryFn:async ()=> {
             const res = await fetch('http://localhost:5000/service')
             return res.json()
        }
    })

    return (
        <section className='my-20 max-w-screen-xl mx-auto'>
           <div className="space-y-4">
                <p className='text-orange text-xl font-bold text-center'>Service</p>
                <h1 className='text-5xl text-center text-bigText font-bold'>Our Service Area</h1>
                <p className="text-smText text-base font-normal max-w-[720px] mx-auto text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-3 gap-6">
                {
                    data && data.map(item => <div key={item._id} className="border p-6 rounded-md space-y-8 hover:scale-105 transition-all duration-300">
                        <img className="h-[208px] w-full rounded-lg" src={item.img} alt="" />
                        <h3 className="text-bigText text-2xl font-bold">{item.title}</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-orange text-xl font-semibold">Price: ${item.price}</p>
                            <Link to={`/service/details/${item._id}`}><button className="text-orange p-6 border scale-75 hover:scale-100 hover:text-white hover:bg-orange transition duration-300 rounded-full"><FaArrowRightLong /></button></Link>
                        </div>
                    </div>)
                }
           </div>
        </section>
    );
};

export default Service;