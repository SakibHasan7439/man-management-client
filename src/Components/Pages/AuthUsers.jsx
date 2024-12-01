import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AuthUsers = () => {
  const authUser = useLoaderData();
  const [allUsers, setAllUser] = useState(authUser);
  
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
            fetch(`http://localhost:3050/authUsers/${_id}`, {
                method: "DELETE"
            })
            .then(res =>res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                const remainingUser = allUsers.filter(user => user._id !== _id);
                setAllUser(remainingUser);
            })
        }
      });
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>lastSignInTime</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={user._id} className="hover">
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastSignInTime}</td>
              <td className="flex gap-2 mt-2 justify-center items-center">
                <Link className="block">
                  <button className="btn-sm bg-orange-500 text-white text-lg px-2 rounded-md">
                    <FaPencil></FaPencil>
                  </button>
                </Link>
                <button onClick={()=>handleDelete(user._id)}
                  className="btn-sm bg-slate-600 text-white text-xl px-2 rounded-md">
                  <MdDelete></MdDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthUsers;
