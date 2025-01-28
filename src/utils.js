import { redirect} from "react-router-dom";

export async function requireAuth(request){
    console.log("here is our request:",request)
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")
    console.log('isLoggedIn:', isLoggedIn);

    if(!isLoggedIn){
        return redirect(`/login?message=You must login first.&redirectTo=${pathname}`)
    }
}