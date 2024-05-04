import  { useContext } from 'react';
import { AuthContext } from '../../Context/ContextComponent';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import axios from 'axios';

const Booking = () => {
    const{user} = useContext(AuthContext)
    
    const {data,refetch} = useQuery({
        queryKey:['booking'],
        queryFn:async ()=> {
             const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
             return res.json()
        }
    })
    const handleDelete = id =>  {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
              
              popup: 'custom-font',
              title: 'custom-font',
              content: 'custom-font',
              confirm: 'custom-font',
              cancel: 'custom-font'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/booking/${id}`)
                .then(res => {
                    if(res.data.deletedCount>0){
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch()
                })
                // fetch(`http://localhost:5000/booking/${id}`,{
                //     method:'DELETE'
                // })
                // .then(res => res.json())
                // .then(data => {
                //     console.log(data);
                //     if(data.deletedCount>0){
                //            swalWithBootstrapButtons.fire({
                //             title: "Deleted!",
                //             text: "Your file has been deleted.",
                //             icon: "success"
                //         });
                //     }
                // })
                
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }
    const handleUpdate = id => {
        axios.patch(`http://localhost:5000/booking/${id}`,{status:'confirm'})
        .then(res => {
            if(res.data.modifiedCount>0){
                refetch()
            }
        })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Service Picture</th>
        <th>Service Name</th>
        <th>Customer Name</th>
        <th>Service Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data && data.map(item => <tr key={item._id}>
            <th>
            <button onClick={()=> handleDelete(item._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="rounded-2xl w-40 h-40">
                    <img src={item.img} className='w-full h-full' alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.fullName}
            </td>
            <td>{item.fullName}</td>
            <th>
              <h1>{"$ "+item.price}</h1>
            </th>
            <th>
              { item.status === 'confirm'? <span>Confirmed</span> :
                <button onClick={()=>handleUpdate(item._id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default Booking;