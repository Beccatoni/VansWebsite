import React, { useState } from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../Api";




export function loader({request}){
  return new URL(request.url).searchParams.get("message")
}

const Login = () => {
    const [logniFormData, setLoginFormData] = useState({email:"", password:""})
    const[status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
     
    const message = useLoaderData()
    const navigate = useNavigate()



    function handleSubmit(e){
        e.preventDefault()
        setStatus('Submitting')
        setError(null)
        loginUser(logniFormData)
            .then(data=> {
              navigate("/host")
            })
            .catch(error=> {
              console.log(error)
              setError(error)})
            .finally(()=> setStatus('idle'))
    }

    function handleChange(e){
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }


  return (
    <>
      <div className="flex flex-col px-7 gap-5 text-center py-20">
        <h1 className="text-3xl font-bold">Sign in to your acount</h1>
        {message && <h2 className="text-red-400 font-bold">{message}</h2>}
        {error && <h2 className="text-red-400 font-bold">{error.message}</h2>}
        <Form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 ">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={logniFormData.email}
            className="px-3 h-[3rem] border-2 border-slate-300 rounded-lg"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={logniFormData.password}
            className="px-3 h-[3rem] border-2 border-slate-300 rounded-lg"
          />
          <button className="bg-[#E17654] text-white  px-3 h-[3rem]  rounded-lg"  disabled={status === 'Submitting'}>
           {status === "Submitting"? "Logging in":"Log in"} 
            </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
