"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { TeamMember } from "@/types/team";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface AnnualReport {
  year: number;
  url: string;
  size: string;
}

const annualReports: AnnualReport[] = [
  {
    year: 2023,
    url: "/reports/annual-report-2023.pdf",
    size: "2.5MB"
  },
  {
    year: 2022,
    url: "/reports/annual-report-2022.pdf",
    size: "2.1MB"
  },
  {
    year: 2021,
    url: "/reports/annual-report-2021.pdf",
    size: "1.8MB"
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "Jane Smith",
    role: "Executive Director",
    image: "/images/team/jane-smith.jpg",
    bio: "Jane has over 15 years of experience in nonprofit management and child advocacy."
  },
  {
    name: "John Doe",
    role: "Program Director",
    image: "/images/team/john-doe.jpg",
    bio: "John leads our program development and implementation efforts."
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    image: "/images/team/sarah-johnson.jpg",
    bio: "Sarah manages our day-to-day operations and team coordination."
  }
];

export default function About() {
  const [activeReport, setActiveReport] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are dedicated to improving the lives of children through education, healthcare, and community support.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
              <p className="text-gray-600">
                Providing access to quality education for underprivileged children.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Healthcare</h3>
              <p className="text-gray-600">
                Ensuring children have access to essential healthcare services.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Community Support</h3>
              <p className="text-gray-600">
                Building strong communities that support children's growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We envision a world where every child has the opportunity to thrive and reach their full potential.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-gray-600">
                To create a world where every child has access to the resources and support they need to succeed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Values</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Integrity</li>
                <li>Compassion</li>
                <li>Excellence</li>
                <li>Community</li>
                <li>Empowerment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who make our mission possible.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of impact and growth
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">2020 - Foundation</h3>
                  <p className="text-gray-600">
                    Founded by passionate educators and healthcare professionals.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">2021 - Expansion</h3>
                  <p className="text-gray-600">
                    Launched our first major programs and partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">2022 - Growth</h3>
                  <p className="text-gray-600">
                    Expanded our reach to serve more communities and children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to work with organizations that share our commitment to helping children
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Partner logos will be added here */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img src="/images/partners/partner1.png" alt="Partner 1" className="w-32 h-32 mx-auto" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img src="/images/partners/partner2.png" alt="Partner 2" className="w-32 h-32 mx-auto" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img src="/images/partners/partner3.png" alt="Partner 3" className="w-32 h-32 mx-auto" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img src="/images/partners/partner4.png" alt="Partner 4" className="w-32 h-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download our annual reports to learn more about our impact and achievements
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-2">Annual Report {report.year}</h3>
                <p className="text-gray-600 mb-4">{report.size}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(report.url, '_blank');
                  }}
                  className="px-6 py-2 border-2 border-[#ef72a3] text-[#ef72a3] rounded-full hover:bg-[#ef72a3] hover:text-white transition-all duration-300"
                >
                  Download Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
