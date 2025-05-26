'use client';

import Header from './components/Header';
import Skills from './components/Skills';
import { Award, Code, Mail, Github, Target, Globe, Download, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Loading from './loading';
import Image from 'next/image';
import Link from 'next/link';

const RobotText = () => {
  const titles = useMemo(() => [
    "AI Enthusiast",
    "Web Developer",
    "CBSE Winner",
    "Problem Solver",
    "Tech Innovator"
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 150;

    if (!isDeleting && currentText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentTitle.slice(0, currentText.length - 1));
      } else {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, titles]);

  return (
    <div className="relative flex items-center justify-center mb-8">
      {/* Speech Bubble */}
      <motion.div
        className="relative bg-gray-800 rounded-2xl p-4 shadow-lg mr-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent min-w-[200px] text-center">
          {currentText}
          <motion.span
            className="inline-block w-1 h-5 bg-blue-400 ml-1"
            animate={{
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        {/* Speech bubble tail */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gray-800 border-b-[10px] border-b-transparent" />
      </motion.div>

      {/* Robot */}
      <motion.div
        className="relative w-24 h-24"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Robot head */}
        <motion.div
          className="absolute w-20 h-20 bg-gray-700 rounded-xl"
          animate={{
            rotate: isDeleting ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isDeleting ? Infinity : 0,
          }}
        >
          {/* Eyes */}
          <div className="absolute top-6 left-4 w-4 h-4 bg-blue-400 rounded-full" />
          <div className="absolute top-6 right-4 w-4 h-4 bg-blue-400 rounded-full" />
          {/* Mouth */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-blue-400 rounded-full"
            animate={{
              scaleY: isDeleting ? [1, 0.5, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isDeleting ? Infinity : 0,
            }}
          />
        </motion.div>
        {/* Antenna */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-700"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">Jay T</h1>
          <nav className="flex gap-6">
            <Link href="#about" className="hover:text-gray-300">About</Link>
            <Link href="#projects" className="hover:text-gray-300">Projects</Link>
            <Link href="#contact" className="hover:text-gray-300">Contact</Link>
          </nav>
        </header>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Full Stack Developer & AI Enthusiast</h2>
              <p className="text-lg mb-6">
                I&apos;m passionate about building innovative web applications and exploring the possibilities of artificial intelligence.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/JachiXD" target="_blank" className="hover:text-gray-300">
                  <Github size={24} />
                </Link>
                <Link href="https://linkedin.com/in/jay-takle" target="_blank" className="hover:text-gray-300">
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:jay.takle@gmail.com" className="hover:text-gray-300">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/profile.jpg"
                alt="Jay T"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose prose-invert">
            <p>
              I&apos;m a full-stack developer with expertise in web development and AI. I love creating
              user-friendly applications that solve real-world problems.
            </p>
            <p>
              My journey in technology started with a deep interest in artificial intelligence and
              machine learning. This led me to explore web development, where I found my passion for
              building intuitive and efficient user interfaces.
            </p>
          </div>
        </section>

        <Skills />

        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">AI-Powered Portfolio</h3>
              <p className="mb-4">
                A modern portfolio website built with Next.js and Tailwind CSS, featuring AI-powered
                content generation and dynamic animations.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/JachiXD/portfolio" target="_blank" className="text-sm hover:text-gray-300">
                  View Code
                </Link>
                <Link href="https://jachixd.github.io/portfolio" target="_blank" className="text-sm hover:text-gray-300">
                  Live Demo
                </Link>
              </div>
            </div>
            {/* Add more projects here */}
          </div>
        </section>

        <section id="contact" className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex flex-col gap-4">
            <Link href="mailto:jay.takle@gmail.com" className="flex items-center gap-2 hover:text-gray-300">
              <Mail size={20} />
              jay.takle@gmail.com
            </Link>
            <Link href="https://linkedin.com/in/jay-takle" target="_blank" className="flex items-center gap-2 hover:text-gray-300">
              <Linkedin size={20} />
              LinkedIn
            </Link>
            <Link href="https://github.com/JachiXD" target="_blank" className="flex items-center gap-2 hover:text-gray-300">
              <Github size={20} />
              GitHub
            </Link>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Jay T. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}



