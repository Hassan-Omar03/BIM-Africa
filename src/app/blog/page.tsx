'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    X, Instagram, Facebook, Linkedin as LinkedinIcon,
    Calendar, Clock, Eye, Star, Users, BookOpen, Mail,User,TrendingUp
} from 'lucide-react';

/* Keep your existing assets & paths */
import logoBg from '../../Assests/srv.svg';
import Footer from '../Components/Footer';
import WorkTogether from '../Components/WorkTogether';
import Navbar from '../Components/Navbar';

/* ---- Your provided Unsplash images ---- */
const U_FEATURED =
    'https://images.unsplash.com/photo-1660644807804-ffacfd7a4137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NTkxMzEyNDN8MA&ixlib=rb-4.1.0&q=80&w=1600';
const U_MOBILE_APP =
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTkwMjEzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1600';
const U_MEETING =
    'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5MDQ3MzAwfDA&ixlib=rb-4.1.0&q=80&w=1600';
const U_INNOVATION =
    'https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDQzNzAyfDA&ixlib=rb-4.1.0&q=80&w=1600';

const U_CASE_STUDY =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80'; // team workshop
const U_LOWCODE_ALT =
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80'; // product/strategy wall


interface Blog {
    id: number;
    img: string;
    tag: string;
    date: string;
    read: string;
    views: string;
    title: string;
    desc: string;
    extraDesc?: string;
    author: string;
    isFeature: boolean;
     role?: string; 
       _id: string;
}


export default function BlogPage() {
const [activeSlide, setActiveSlide] = useState(0);

    const [latest, setLatest] = useState<Blog[]>([]);
    const [allFeatured, setAllFeatured] = useState<Blog[]>([]);
    const getBlogs = async () => {
        try {
            const res = await fetch('https://bim-africa-backend.vercel.app/api/blogs');
            const data = await res.json();
            console.log(data);
            const blogs = data.blogs.filter((blog:Blog) => blog.isFeature == false)
            setLatest(blogs)
            const featured = data.blogs.filter((blog:Blog) => blog.isFeature == true)
            setAllFeatured(featured)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBlogs();
    }, [])
    /* ---------- Content to match screenshots ---------- */
    // const featured = {
    //     id: 1,
    //     img: U_FEATURED,
    //     tag: 'Cybersecurity',
    //     date: 'Dec 15, 2024',
    //     read: '8 min read',
    //     views: '2.4k',
    //     title: 'The Future of Cybersecurity: AI-Powered Threat Detection in 2024',
    //     desc:
    //         'Discover how artificial intelligence is revolutionizing cybersecurity by detecting threats in real-time and protecting businesses from sophisticated attacks.',
    //     author: 'Sarah Mitchell',
    //     role: 'Senior Security Expert',
    // };

    // Latest cards (all unique images now)

    // const latest = [

    //     {
    //         id: 1,
    //         img: U_MEETING,
    //         tag: 'Web Development',
    //         date: 'Dec 12, 2024',
    //         read: '6 min read',
    //         views: '1.8k',
    //         title: 'Building Scalable Web Applications with Modern React Architecture',
    //         desc:
    //             'Learn the best practices for developing high-performance React applications that can scale with your business growth.',
    //         author: 'Marcus Johnson',
    //     },
    //     {
    //         id:2,
    //         img: U_MOBILE_APP,
    //         tag: 'Mobile Apps',
    //         date: 'Dec 10, 2024',
    //         read: '5 min read',
    //         views: '1.2k',
    //         title: 'Mobile-First Design: Creating Apps That Users Love',
    //         desc:
    //             'Explore the principles of mobile-first design and how to create intuitive user experiences across all devices.',
    //         author: 'Elena Rodriguez',
    //     },
    //     {
    //         id:3,
    //         img: U_CASE_STUDY, // changed (was U_MEETING)
    //         tag: 'Case Studies',
    //         date: 'Dec 08, 2024',
    //         read: '12 min read',
    //         views: '956',
    //         title: 'Digital Transformation Success Stories: Lessons from Luxembourg',
    //         desc:
    //             'Case study showcasing how European businesses transformed their operations through strategic digital initiatives.',
    //         author: 'David Chen',
    //     },
    //     {
    //         id:4,
    //         img: U_INNOVATION,
    //         tag: 'Web Development',
    //         date: 'Dec 05, 2024',
    //         read: '7 min read',
    //         views: '1.5k',
    //         title: 'Progressive Web Apps: Bridging the Gap Between Web and Mobile',
    //         desc:
    //             'Understand how PWAs are changing the digital landscape — and why they are becoming essential for modern businesses.',
    //         author: 'Alex Thompson',
    //     },
    //     {
    //         id:5,
    //         img: U_LOWCODE_ALT, // changed (was U_INNOVATION)
    //         tag: 'Digital Strategy',
    //         date: 'Dec 03, 2024',
    //         read: '9 min read',
    //         views: '2.1k',
    //         title: 'The Rise of Low-Code Solutions in Enterprise Development',
    //         desc:
    //             'Discover how low-code platforms accelerate development cycles and democratize application creation.',
    //         author: 'Rachel Kim',

    //     },      
    // ];

    return (
        <div
            className="min-h-screen text-white"
            style={{
                backgroundImage: `url(${logoBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Navbar/>
            
              <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
      `}</style>
            
            
            {/* ---------------- Hero + Stats ---------------- */}
            <section className="px-4 sm:px-8 pt-8 sm:pt-12 md:pt-14 max-w-7xl mx-auto text-center">


  <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
    BIM Africa <span className="text-[#ff1f00]">Blog</span>
  </h1>

  <p className="text-white mt-4 max-w-4xl mx-auto">
    Professional insights on technology and digital inovations
  </p>

                {/* EXACT layout & labels as screenshot */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="px-6 py-6">
                        <div className="mx-auto w-14 h-14 rounded-full bg-red-700 border border-[#ff1f00]/40 flex items-center justify-center mb-3">
                            <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-3xl font-semibold">24+</div>
                        <div className="text-gray-300 mt-1">Articles Published</div>
                    </div>
                    <div className="px-6 py-6">
                        <div className="mx-auto w-14 h-14 rounded-full bg-red-700 border border-[#ff1f00]/40 flex items-center justify-center mb-3">
                            <Users className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-3xl font-semibold">5K+</div>
                        <div className="text-gray-300 mt-1">Monthly Readers</div>
                    </div>
                    <div className="px-6 py-6">
                        <div className="mx-auto w-14 h-14 rounded-full bg-red-700 border border-[#ff1f00]/40 flex items-center justify-center mb-3">
                            <Star className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-3xl font-semibold">Expert</div>
                        <div className="text-gray-300 mt-1">Industry Insights</div>
                    </div>
                </div> */}
            </section>

            {/* ---------------- Featured Article ---------------- */}
            <section className="px-4 sm:px-8 pt-10 max-w-7xl mx-auto">
        <div className="mb-4">
  {/* Heading with TrendingUp icon */}
  <div className="flex items-center gap-2 ">
    <div className="w-9 h-9 rounded-full bg-[#ff1f00]  flex items-center justify-center">
      <TrendingUp className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-2xl sm:text-3xl">Featured Article</h2>
  </div>

  {/* Subtext with Star icon */}
  <div className="flex items-center gap-2 ml-13">
    <p className="text-sm text-gray-300">Most Popular this week</p>
  </div>
</div>



                {allFeatured?.map((featured, index) => (
                   <article
  key={index}
  className="group relative rounded-3xl my-4 overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(255,31,0,0.15)]"
>
  {/* Trending Now Badge */}
  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-[#ff1f00] text-white">
    <TrendingUp className="w-4 h-4 text-white" />
    Trending Now
  </span>

  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* Image Section */}
    <div className="relative h-64 sm:h-80 md:h-full overflow-hidden">
      <Image
        src={featured?.img}
        alt="Featured"
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        priority
      />
      <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
        <Star className="w-4 h-4" /> Featured Article
      </span>
    </div>

    {/* Content Section */}
    <div className="p-6 sm:p-8 flex flex-col">
      <div className="flex items-center gap-3 text-xs text-white mb-2">
        <span className="bg-[#ff1f00] text-red-white px-2 py-0.5 rounded-full">
          {featured?.tag}
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {featured?.date}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-4 h-4" /> {featured?.read}
        </span>
        <span className="inline-flex items-center gap-1">
          <Eye className="w-4 h-4" /> {featured?.views}
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
        {featured?.title}
      </h3>
      <p className="text-gray-300 mt-3">{featured?.desc}</p>

      <div className="mt-auto pt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ff1f00] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>

          <div className="text-sm">
            <div className="font-medium">{featured?.author}</div>
            <div className="text-gray-400">{featured?.role}</div>
          </div>
        </div>
        <Link
          href={`/articles?id=${featured?._id}`}
          className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
        >
          📚 Read Article →
        </Link>
      </div>         </div>
                        </div>
                    </article>
                ))}


            </section>

            {/* ---------------- Latest Articles ---------------- */}
            <section className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Latest Articles</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {latest.map((a, i) => (
                        <article
                            key={i}
                            className="group rounded-3xl overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1f00]"
                        >
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                                <Image
                                    src={a.img}
                                    alt={a.title}
                                    fill
                                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                />
                                <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                                    {a.tag}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center flex-wrap gap-3 text-xs text-gray-300 mb-2">
                                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {a.date}</span>
                                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {a.read}</span>
                                    <span className="inline-flex items-center gap-1"><Eye className="w-4 h-4" /> {a.views}</span>
                                </div>

                                <h4 className="text-xl sm:text-2xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
                                    {a.title}
                                </h4>
                                <p className="text-gray-300 mt-2">{a.desc}</p>

                                <div className="mt-5 flex items-center justify-between">
                                    <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-[#ff1f00] flex items-center justify-center">
    <User className="w-5 h-5 text-white" />
</div>
                                        {a.author}
                                    </div>
                                    <Link href={`/articles?id=${a._id}`} className="text-[#ff1f00] hover:text-[#ff1f00] text-lg" aria-label="Read article">→</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* <div className="mt-8 text-center">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-semibold"
                    >
                        Load More Articles →
                    </Link>

                </div> */}
            </section>

            {/* ---------------- Subscribe panel ---------------- */}
         <WorkTogether/>
          <Footer/>
        </div>
    );
}
