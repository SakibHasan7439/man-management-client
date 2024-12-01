import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        const user = {name, email, gender, status};
        
        fetch('http://localhost:3050/addUsers', {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: "Successful",
                    text: "Successfully added",
                    icon: "success"
                });
                form.reset();
            }
        })
    }
  return (
    <div>
        <Link to={"/"} className="font-semibold text-blue-500 block h-[70px]">All User</Link>
        <h2 className="text-center text-2xl font-semibold mb-6">New User</h2>
      <form onSubmit={handleSubmit} className="w-[70%] mx-auto">
        <label>Name:</label>
        <input
          className="w-full border border-black h-[48px] mb-6 px-4"
          type="text"
          name="name"
          id=""
        />
        <label>Email:</label>
        <input
          className="w-full border-black border h-[48px] px-4 mb-8"
          type="email"
          name="email"
          id=""
        />

        <div className="flex items-center gap-8 mb-6">
          <p>Gender</p>
          <div>
            <input type="radio" id="male" name="gender" value="male" />{" "}
            <label className="mr-6" htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="flex items-center gap-8 mb-8">
          <p>Status</p>
          <div>
            <input type="radio" id="active" name="status" value="Active" />{" "}
            <label className="mr-6" htmlFor="active">Active</label>
            <input type="radio" id="inactive" name="status" value="Inactive" />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
        <input type="submit" value="Save" className="bg-green-400 h-[50px] w-full cursor-pointer hover:bg-green-500 font-semibold" />
      </form>
    </div>
  );
};

export default AddUser;
