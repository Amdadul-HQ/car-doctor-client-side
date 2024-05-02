import { useQuery } from "@tanstack/react-query";


const Service = () => {
    const {data} = useQuery({
        queryKey:['service'],
        queryFn:async ()=> {
             const res = await fetch('/service.json')
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
                    data && data.map(item => <div key={item.id} className="border p-6 rounded space-y-3">
                        <img className="h-[208px] w-full rounded-lg" src={item.img} alt="" />
                        <h3 className="text-bigText text-2xl font-bold">{item.title}</h3>
                        <div>
                        <p className="text-orange text-xl font-semibold">Price: ${item.price}</p>
                        <button></button>
                        </div>
                    </div>)
                }
           </div>
        </section>
    );
};

export default Service;