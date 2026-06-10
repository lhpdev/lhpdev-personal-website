'use client';

import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  accent: string;
  dotColor: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    title: 'Sr. Software Engineer',
    company: 'SWARE',
    period: '12/2024 – Present',
    location: 'Los Angeles, United States',
    accent: 'text-cyan-600 dark:text-cyan-400',
    dotColor: 'bg-cyan-400',
    bullets: [
      'Designed and implemented scalable backend features with Ruby on Rails, enabling seamless communication across business logic and third-party services.',
      'Led the development of React.js and Stimulus-based frontend components, improving user experience and application performance.',
      'Integrated external services like Google Address API and RingCentral to enable real-time and asynchronous operations.',
      'Engineered reliable webhook pipelines for consistent data synchronization across distributed systems.',
      'Promoted Agile practices to improve delivery cadence and team alignment, enhancing collaboration and output.',
      'Onboarded and mentored new engineers, accelerating team ramp-up through technical guidance and best practices.',
    ],
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Sixfold AI',
    period: '10/2023 – 12/2024',
    location: 'New York, United States (Remote)',
    accent: 'text-violet-600 dark:text-violet-400',
    dotColor: 'bg-violet-400',
    bullets: [
      'Designed and implemented robust APIs using Ruby on Rails, optimizing communication between Python-based AI server and React client platform while ensuring low latency and high reliability.',
      'Led the development of a responsive, user-friendly React-based frontend, incorporating dynamic AI-driven insights for real-time decision support for underwriters.',
      'Introduced modern software practices such as automated testing, continuous integration, and peer code reviews to enhance productivity and code quality.',
      'Engineered efficient data pipelines and utilized RESTful API design patterns to optimize performance, scalability, and secure exchange of information across platforms.',
      'Collaborated with data scientists and AI engineers to integrate generative AI models, delivering accurate insights and innovative features for improved decision-making tools.',
      'Enhanced codebase maintainability through clean code principles, modular architectures, and reusable components.',
      'Managed database architecture for over 50 projects utilizing Postgres and MongoDB, ensuring robust and scalable data management solutions.',
    ],
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Priceline Partner Solutions',
    period: '11/2021 – 10/2023',
    location: 'Dallas, United States (Remote)',
    accent: 'text-blue-600 dark:text-blue-400',
    dotColor: 'bg-blue-400',
    bullets: [
      'Updated Ruby gems and JS libraries, and implemented security patches to ensure system security and compatibility, protecting platforms from vulnerabilities.',
      'Designed and implemented new features for room booking platforms with Ruby on Rails and React, enhancing user functionality and scalability.',
      'Worked with teams to translate requirements into technical solutions, improving functionality and scalability.',
      'Investigated and resolved bugs across platforms, ensuring optimal performance and improved user experience.',
      'Refactored Ruby on Rails code, improving readability, maintainability, and performance while reducing technical debt.',
      'Implemented and maintained React components within the Ruby on Rails architecture for a dynamic user interface.',
      'Optimized performance by maintaining critical C++ components and updating database queries within Rails projects.',
    ],
  },
  {
    title: 'Sr. Software Engineer',
    company: 'In All Media',
    period: '07/2020 – 11/2021',
    location: 'United States of America (Remote)',
    accent: 'text-amber-600 dark:text-amber-400',
    dotColor: 'bg-amber-400',
    bullets: [
      'Led a team developing 15+ APIs for a major job board company, ensuring successful integration by coordinating tasks and overseeing implementation milestones.',
      'Developed an automated process for API integration, significantly reducing manual effort and minimizing errors.',
      'Standardized integration components to enhance consistency, reusability, and quality across all projects.',
      'Conducted extensive testing and validation of API integrations, ensuring data accuracy, seamless functionality, and compliance with external requirements.',
      'Provided technical guidance and mentorship to team members, fostering a collaborative environment to achieve project goals efficiently.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Worldpackers',
    period: '07/2019 – 07/2020',
    location: 'São Paulo, Brazil',
    accent: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-400',
    bullets: [
      'Contributed to the maintenance and development of new features for the web platform, ensuring it served a global community of nearly 1.7 million users.',
      "Worked on improving the platform's usability, performance, and scalability while supporting the platform in English, Portuguese, and Spanish.",
      'Developed and maintained backend features using Ruby on Rails (Rails MVC and Rails API) to support the web platform as well as Android and iOS apps.',
      'Utilized tools like NewRelic and Log DNA to monitor platform health and performance, ensuring the application ran smoothly at scale.',
      'Worked with Cloudflare to manage traffic routing, mitigate DDoS attacks, and improve overall availability.',
      'Implemented additional security measures to safeguard user data and maintain a reliable, secure platform.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Welaborate',
    period: '02/2018 – 07/2019',
    location: 'São Paulo, Brazil (Remote)',
    accent: 'text-rose-600 dark:text-rose-400',
    dotColor: 'bg-rose-400',
    bullets: [
      'Designed and developed a scalable RESTful API using Ruby on Rails, MongoDB, and Elasticsearch to optimize data management and enhance search functionality.',
      'Created efficient, scalable backend endpoints supporting user interactions, resource sharing, and project management.',
      'Contributed to front-end development with React.js for a seamless user experience and integrated with REST API for dynamic content rendering.',
      'Ensured robustness and reliability by writing unit and integration tests using RSpec, Jest, and Enzyme, improving code coverage.',
      'Explored blockchain integration and strategized decentralized solutions despite funding cancellation.',
      'Engaged in startup training events and delivered multiple investor pitches to drive interest and secure potential funding.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Experience
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent hidden sm:block" />

        <div className="space-y-8 sm:space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative sm:pl-12"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[13px] top-5 w-3 h-3 rounded-full ${job.dotColor} ring-4 ring-slate-50 dark:ring-[#06070d] hidden sm:block z-10`}
              />

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors duration-200 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {job.title}
                    </h3>
                    <span className={`text-sm font-semibold ${job.accent}`}>{job.company}</span>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <HiCalendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 dark:bg-slate-800/80 mb-4" />

                {/* Bullets */}
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${job.dotColor} shrink-0 opacity-70`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
