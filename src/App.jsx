import { useLayoutEffect,useRef } from 'react'
import { gsap } from 'gsap'
import './App.css'
import Navbar from './components/Navbar';
import HomeDesc from './components/HomeDesc';
import Projects from './components/Projects';
import TechSkill from './components/TechSkill';
import Footer from './components/Footer';
import Skill from './components/Skill';
import image from '/img/img1.png';

function App() {
  const comp = useRef(null);
  const welcomRef = useRef(null);

  useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
        delay:0.3,
      }).from(["#title-1","#title-2","#title-3"],{
        opacity:0,
        y:'+=30',
        stagger:0.5
      }).to(["#title-1","#title-2","#title-3"],{
        opacity:0,
        y:'-=30',
        delay:0.3,
        stagger:0.5,
      }).to("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
        delay:0.3,
      }).from("#welcome",{
        opacity:0,
        x:'-=30',
        duration:0.5,
        
      })
    },comp)

    return ()=> ctx.revert()
  },[])
  return (
    <div className='relative p-0 m-0' ref={comp}>
        <div id='intro-slider' className='h-screen p-10 bg-gray-50 absolute top-0 left-0 font-roboto z-10 w-full flex flex-col gap-10 tracking-tight'>
          <h1 id='title-1' className='text-6xl'>/Full-stack Developer</h1>
          <h1 id='title-2' className='text-6xl'>/Web Animation Developer</h1>
          <h1 id='title-3' className='text-6xl'>/Backend Developer</h1>
          <div className='absolute bottom-20 left-10 w-60/100 h-32'>
            <p className='text-lg tracking-tight text-gray-700 w-60/100 font-bold  new-font-ibm'>
              Hello, my name is Biniyam Girma. I'm a passionate and solutions-driven Computer Science graduate, dedicated to crafting technology that makes a tangible impact.
            </p>
          </div>
          <div className='absolute bottom-1 right-4 w-30/100 h-120 bg-amber-600'>
          <img src={image} alt="" />
          </div>
        </div>
        <div className='h-screen flex flex-col bg-gray-950  place-items-center px-12 py-4 relative'>
   <div className='min-w-full flex justify-between items-center '>
        <h1 className='uppercase text-xl text-white new-font'>biniyam girma</h1>
        <div className='bg-[#5F5F5F29] flex justify-center items-center rounded-full'>
            <div className='flex justify-between w-full p-2'>
            <div className='new-font size-8 rounded-full flex justify-center items-center bg-gray-700 text-amber-50'>
                I
            </div>
            <h2 className='text-[12px] text-[#727272] uppercase text-center flex justify-center items-center px-2 new-font'>
                Biniyam Girma
            </h2>
            </div>
        </div>
    </div>
    <h2 className='text-[350px]  z-5 absolute top-2 text-[#717171]/5 blur-sm'>፳፩</h2>
    <h2 className='text-[350px]  z-5 absolute top-2 left-0 text-[#717171]/10'>፳፩</h2>
    <h2 className='text-[350px]  z-5 absolute top-2 right-0 text-[#717171]/10'>፳፩</h2>
          <div className="flex w-full h-full justify-center items-center relative">
            <h1  id='welcome' className='text-5xl z-10 font-bold text-gray-100 new-font'>
            Welcom To My Portfolio
          </h1>
          <div className='w-[260px] new-font flex flex-col space-y-2 text-wrap border-[#292929] absolute bottom-5 right-5 rounded-s-md border-r-2 pr-8'>
        <h1 className="text-lg flex flex-col justify-end items-end text-white new-font-ibm">Web<span>Animation...</span> </h1>
        <p className="flex flex-col w-auto items-end text-[12px] text-[#717171] new-font-ibm"><span>I also Impliment</span> <span>  Web Animation Using</span> <span><span className="text-white"><a href="">GSAP</a></span> Library</span> </p>
    </div>
          </div>
          <div className="flex space-x-4  h-16 w-full items-center justify-center">
            <button className="bg-white px-4 py-3 rounded-full new-font-ibm"><a href="https://drive.google.com/file/d/1q7Bzj_DDGhNhCE0KTgs1k4j5CZlwLp90/view?usp=sharing" download={"pdf/Biniyam-girma-cv.pdf"} target='_blank' >Download Resume</a></button>
            <button className="border-2 rounded-full border-white text-white px-4 py-3 new-font-ibm">
              <a href="tel:+251928259867" className='flex justify-center items-center gap-2 '>Contact Me 
                <span>
                  <svg className='w-4' viewBox="0 0 24 24" fill="none" >
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </button>
          </div>
          <Navbar />
        </div>
        <section id='About' className="min-h-screen bg-gray-950 px-12  ">
        <div className="w-full flex justify-center items-center ">
        <img className="max-h-72 object-cover" src="https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8MTR8fHx8fHx8fDE3NTg2OTkwMjh8&ixlib=rb-4.1.0" alt="" />
        </div>
        <div className="w-60/100 pt-6 relative">
            <h1 className="text-9xl text-white new-font">About Me</h1>
          <p className="text-white new-font-ibm"> I thrive on turning complex problems into elegant, user-focused solutions using modern tools like JavaScript, React, Node.js, and Python. I'm excited to begin my professional career, and I am eager to connect, collaborate, and contribute to a team that builds things that matter.</p>
        </div>
        </section>
        <TechSkill />
        <Skill />
        <Projects />
        <Footer />
        <div className='w-full h-[30px] bg-gray-950 flex justify-center items-center border-t-1 border-gray-600'>
          <p className='text-[#727272]'>copy 2025</p>
        </div>
</div>
  );
}

export default App;
