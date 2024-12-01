import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(userCredential =>{
        console.log(userCredential.user);
        const lastSignInTime = userCredential?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch('http://localhost:3050/authUsers', {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
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
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
          <p className="text-center py-4">New to this website ? <Link to={"/register"} className="text-blue-600">Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
