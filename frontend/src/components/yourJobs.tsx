import { Card,CardContent,CardTitle,CardDescription } from "./ui/card"


export const YourJobs=()=>{
     return(
          <div>
               <Card className="`hover:shadow-lg transition-shadow duration-300`">
               <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold text-center mt-4">
                    Your Jobs
                    </CardTitle>
                    <CardDescription className="text-center mt-3 text-gray-600">
                    View all the jobs you applied for
                    </CardDescription>
               </CardContent>
               </Card>
          </div>
     )
}