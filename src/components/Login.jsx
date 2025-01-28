import React, { useState } from "react";
import { useLoaderData, useNavigate, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../Api";


async function fakeLoginUser(creds) {
  if(creds.email === "b@b.com" && creds.password === "p123"){
    return "user logged in!"
  }
  throw new Error("couldn't log the user")
}

export function loader({request}){
  return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
  const formData = await request.formData()
  const email =   formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url)
       .searchParams.get("redirectTo") || "/host"

  try {
    const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    // console.log(data)
    return redirect("/host")
  } catch (error) {
    return error.message
  }
 
 
}

const Login = () => {
    const[status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
     
    const message = useLoaderData()
    const navigate = useNavigate()
    const errorMessage  = useActionData()
    const navigation = useNavigation()




    // function handleSubmit(e){
    //     e.preventDefault()
    //     setStatus('Submitting')
    //     setError(null)
    //     loginUser(logniFormData)
    //         .then(data=> {
    //           navigate("/host")
    //         })
    //         .finally(()=> setStatus('idle'))
    // }

   

  return (
    <>
      <div className="flex flex-col px-7 gap-5 text-center py-20">
        <h1 className="text-3xl font-bold">Sign in to your acount</h1>
        {message && <h2 className="text-red-400 font-bold">{message}</h2>}
        {errorMessage && <h2 className="text-red-400 font-bold">{errorMessage.message}</h2>}
        <Form action="" method="post" replace className="flex flex-col gap-5 ">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="px-3 h-[3rem] border-2 border-slate-300 rounded-lg"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="px-3 h-[3rem] border-2 border-slate-300 rounded-lg"
          />
          <button className="bg-[#E17654] text-white  px-3 h-[3rem]  rounded-lg"  disabled={status === 'Submitting'}>
           {navigation.state === "Submitting"? "Logging in":"Log in"} 
            </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
