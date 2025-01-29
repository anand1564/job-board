import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'; // Assuming shadcn/ui components are imported correctly
import { Search, User, Clock } from 'lucide-react'; // Icons for features
import { motion } from 'framer-motion'; // For animations

// Animation variants for framer-motion
const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Advanced Job Search */}
          <motion.div
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <Search className="w-12 h-12 text-blue-500" />
                </div>

                {/* Title */}
                <CardTitle className="text-xl font-semibold text-center mt-4">
                  Advanced Job Search
                </CardTitle>

                {/* Description */}
                <CardDescription className="text-center mt-3 text-gray-600">
                  Filter jobs by location, industry, job type, experience level, and salary range.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature 2: Personalized Dashboard */}
          <motion.div
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <User className="w-12 h-12 text-green-500" />
                </div>

                {/* Title */}
                <CardTitle className="text-xl font-semibold text-center mt-4">
                  Personalized Dashboard
                </CardTitle>

                {/* Description */}
                <CardDescription className="text-center mt-3 text-gray-600">
                  View saved jobs, applications, and recommended opportunities based on your skills
                  and preferences.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature 3: Application Tracking */}
          <motion.div
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <Clock className="w-12 h-12 text-purple-500" />
                </div>

                {/* Title */}
                <CardTitle className="text-xl font-semibold text-center mt-4">
                  Application Tracking
                </CardTitle>

                {/* Description */}
                <CardDescription className="text-center mt-3 text-gray-600">
                  Track the status of your job applications in real time.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};