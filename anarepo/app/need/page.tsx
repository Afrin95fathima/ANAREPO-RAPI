'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import React from 'react';

export default function NeedPage() {
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
            Why You Need Rapy
          </motion.h1>

          <div className="space-y-12">
            <BenefitSection
              title="Save Valuable Time"
              description="Stop spending hours manually reviewing repositories. Rapy analyzes everything from code quality to community health in seconds."
              icon={
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <BenefitSection
              title="Make Informed Decisions"
              description="Get comprehensive insights about repositories, including activity levels, documentation quality, and community support."
              icon={
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <BenefitSection
              title="Never Lose Context"
              description="Rapy remembers your preferences and previous evaluations, providing personalized recommendations even after clearing chat history."
              icon={
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />

            <BenefitSection
              title="Stay Up-to-Date"
              description="Receive real-time updates about repository changes, new releases, and community activity trends."
              icon={
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-purple-600 text-white p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Experience the Power of AI-Assisted Repository Analysis
              </h3>
              <p className="text-purple-100 mb-6">
                Join thousands of developers who are making smarter decisions about open-source dependencies with Rapy.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/signup"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Get Started Free
                </a>
                <a
                  href="/chat"
                  className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  Try Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BenefitSection({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex gap-6"
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
