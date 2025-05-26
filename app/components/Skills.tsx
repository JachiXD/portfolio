'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe, Layers, Server } from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90, icon: Code },
      { name: "JavaScript", level: 85, icon: Code },
      { name: "Java", level: 80, icon: Code },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React", level: 85, icon: Globe },
      { name: "Next.js", level: 80, icon: Layers },
      { name: "HTML/CSS", level: 90, icon: Globe },
    ]
  },
  {
    category: "AI & ML",
    items: [
      { name: "Machine Learning", level: 85, icon: Cpu },
      { name: "Deep Learning", level: 80, icon: Cpu },
      { name: "Data Analysis", level: 85, icon: Database },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 85, icon: Server },
      { name: "Docker", level: 75, icon: Server },
      { name: "AWS", level: 70, icon: Server },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 