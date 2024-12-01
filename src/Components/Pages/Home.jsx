import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const Home = () => {
    const user = useLoaderData();
    const [allUser, setAllUser] = useState(user);

    const handleDelete = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3050/addUsers/${_id}`, {
                    method: "DELETE"
                })
                .then(res =>res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
                const remaining = allUser.filter((user)=> user._id != _id);
                setAllUser(remaining);
            }
        });
    }
    return (
        <div>
            <Link to={"/addUsers"} className="px-6 block w-[140px] py-3 text-blue-500 mb-8 shadow-md flex items-center gap-2">
            <p>New User</p>
            <FaUser></FaUser>
            </Link>

            <table className="w-full">
                <thead>
                <tr className="bg-slate-800 text-white h-[40px] border-collapse border-2">
                    <th>Name</th>
                    <th>@email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((userInfo)=>(
                            <tr className="text-center py-2 border-collapse border-2" key={userInfo._id}>
                                <td>{userInfo.name}</td>
                                <td>{userInfo.email}</td>
                                <td>{userInfo.gender}</td>
                                <td>{userInfo.status}</td>
                                <td className="flex gap-2 mt-2 justify-center items-center">
                                    <Link to={`addUsers/${userInfo._id}`}>
                                        <button className="btn-sm bg-red-500 text-white text-lg px-2 rounded-md">
                                            <FaPencil></FaPencil>
                                        </button>
                                    </Link>
                                    <button onClick={()=>handleDelete(userInfo._id)} className="btn-sm bg-green-500 text-white text-xl px-2 rounded-md">
                                        <MdDelete></MdDelete>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;