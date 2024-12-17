import { Button } from "./ui/button";

export default function Header(){
     return(
          <div className="flex flex-cols items-start justify-around">
               <h1 className="text-3xl font-semibold">Job Portal</h1>
               <ul className="flex flex-rows items-center justify-center">
                    <li className="mx-2"><a href="/">Home</a></li>
                    <li className="mx-2"><a href="/jobPortal">Features</a></li>
                    <li className="mx-2"><a href="/apply">Apply</a></li>
                    <Button>Sign Up</Button>
              </ul>
          </div>
     )
}