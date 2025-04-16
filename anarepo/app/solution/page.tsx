'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            How ANAREPO Solves Your Challenges
          </motion.h1>

          <div className="space-y-12">
            <SolutionSection
              title="AI-Powered Analysis"
              description="Rapy leverages advanced AI to analyze repositories in seconds, evaluating code quality, community health, and maintenance patterns automatically."
              features={[
                "Real-time GitHub data analysis",
                "Comprehensive evaluation metrics",
                "Instant insights and recommendations"
              ]}
            />

            <SolutionSection
              title="Persistent Memory"
              description="Our system remembers your preferences, previous evaluations, and specific requirements across sessions, providing personalized insights every time."
              features={[
                "Cross-session context retention",
                "Preference-based recommendations",
                "Historical comparison capabilities"
              ]}
            />

            <SolutionSection
              title="Standardized Evaluation"
              description="Get consistent, thorough assessments based on industry best practices and your specific needs, ensuring no critical factors are overlooked."
              features={[
                "Customizable evaluation criteria",
                "Comprehensive scoring system",
                "Detailed analysis reports"
              ]}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Repository Evaluation Process?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Join ANAREPO today and experience the power of AI-assisted repository analysis with Rapy.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/chat"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Try Rapy Now
                </a>
                <a
                  href="/need"
                  className="inline-block bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SolutionSection({ 
  title, 
  description, 
  features 
}: { 
  title: string; 
  description: string;
  features: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
