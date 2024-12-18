import { Star, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const Data = {
  averageRating: 4.2,
  totalReviews: 127,
  ratingDistribution: [
    { stars: 5, count: 75 },
    { stars: 4, count: 32 },
    { stars: 3, count: 15 },
    { stars: 2, count: 3 },
    { stars: 1, count: 2 },
  ],
  reviews: [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "This product exceeded my expectations. The quality is outstanding, and it's incredibly user-friendly. I highly recommend it to anyone looking for a reliable solution.",
      rating: 5,
      date: "2023-06-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "While the product is decent, I feel it's a bit overpriced for what it offers. It gets the job done, but there's room for improvement in terms of features.",
      rating: 3,
      date: "2023-06-10"
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "I'm thoroughly impressed with this product. It's intuitive, efficient, and has significantly improved my workflow. The customer support is also top-notch!",
      rating: 5,
      date: "2023-06-05"
    }
  ]
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-4xl mb-8 text-center">Customer Reviews</h1>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-5xl font-bold">{Data.averageRating.toFixed(1)}</p>
            <StarRating rating={Math.round(Data.averageRating)} />
            <p className="text-sm text-gray-600 mt-1">{Data.totalReviews} reviews</p>
          </div>
          <div className="w-2/3">
            {Data.ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center mb-2">
                <span className="w-12 text-sm">{dist.stars} stars</span>
                <Progress 
                  value={(dist.count / Data.totalReviews) * 100} 
                  className="h-2 w-full mx-2"
                />
                <span className="w-12 text-sm text-right">{dist.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback><User className="w-6 h-6" /></AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <StarRating rating={review.rating} />
              <p className="mt-4 text-gray-700">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

