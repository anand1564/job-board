import { Card,CardContent,CardDescription,CardTitle } from "./ui/card"
export const Features=()=>{
     return(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <CardTitle className="mt-2">Advanced Job Search</CardTitle>
              <CardDescription className="mt-3">
              Filter jobs by location, industry, job type, experience level, and salary range.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="mx-5">
            <CardContent>
              <CardTitle className="mt-2">Personalised Dashboard</CardTitle>
              <CardDescription className="mt-3">
              View saved jobs, applications, and recommended opportunities based on skills and preferences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="mx-5">
            <CardContent>
              <CardTitle className="mt-2">Application Tracking</CardTitle>
              <CardDescription className="mt-3">
              Track the status of your job applications in real time.
              </CardDescription>
            </CardContent>
          </Card>
          </div>
     )
}