import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Header(){
     const navigate = useNavigate()
     return(
          <div className="flex flex-cols items-start justify-around">
               <h1 className="text-3xl font-semibold">Job Portal</h1>
               <ul className="flex flex-rows items-center justify-center">
                    <li className="mx-2"><a href="/">Home</a></li>
                    <li className="mx-2"><a href="/jobPortal">Features</a></li>
                    <li className="mx-2"><a href="/apply">Apply</a></li>
                    <Button onClick={()=>{navigate('/auth')}}>Sign Up</Button>
              </ul>
          </div>
     )
}