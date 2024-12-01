import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createNewUser } = useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
        .then(userCredential => {
            console.log(userCredential.user);
            const createdAt = userCredential?.user?.metadata?.creationTime;
            const newUser = {name, email, createdAt};
            form.reset();

            fetch('http://localhost:3050/authUsers', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title: "Successful!",
                        text: "successfully added to database",
                        icon: "success"
                      });
                }
            })
        })
        .catch(err =>{
            console.log("ERROR", err.message);
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-[350px] flex justify-center flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">

              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
