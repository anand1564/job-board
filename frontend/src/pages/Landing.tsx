import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/features";
import { Reviews } from "@/components/reviews";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-12 gap-8">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-start justify-center flex-1 space-y-6 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            One Stop Solution for Job Searching
          </h1>
          <p className="text-lg text-gray-600">
            Find your dream job with us
          </p>
          <div className="flex flex-row gap-4">
            <Button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
              For Recruiters
            </Button>
            <Button className="px-6 py-2 text-white bg-green-600 hover:bg-green-700">
              For Job Seekers
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/jobSearch_hero.jpg"
            alt="Job Search"
            className="w-full max-w-md md:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Features/>
      <Reviews />
      <Footer/>
    </div>
  );
}
