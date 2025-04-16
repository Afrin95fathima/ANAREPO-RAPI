'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ProblemPage() {
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
            The Challenge of Evaluating Open Source
          </motion.h1>

          <div className="space-y-12">
            <ProblemSection
              title="Time-Consuming Research"
              description="Developers spend countless hours manually reviewing repositories, reading documentation, and analyzing community metrics to assess project viability."
            />

            <ProblemSection
              title="Inconsistent Evaluation"
              description="Without a standardized approach, developers often miss critical factors or make decisions based on incomplete information."
            />

            <ProblemSection
              title="Context Loss"
              description="When evaluating multiple repositories over time, it's difficult to remember and compare previous assessments and requirements."
            />

            <ProblemSection
              title="Evolving Requirements"
              description="As project needs change, developers must re-evaluate repositories against new criteria, often starting from scratch."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                The Solution: ANAREPO with Rapy
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ANAREPO&apos;s AI-powered assistant, Rapy, addresses these challenges by providing intelligent, 
                consistent analysis while maintaining context across sessions. Ready to transform how you 
                evaluate open-source projects?
              </p>
              <div className="mt-6">
                <a
                  href="/solution"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Learn About Our Solution
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProblemSection({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
