import { useLayoutEffect,useRef } from 'react'
import { gsap } from 'gsap'
import './App.css'

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
          <h1 id='title-1' className='text-6xl'>Full-stack Developer</h1>
          <h1 id='title-2' className='text-6xl'>content creater</h1>
          <h1 id='title-3' className='text-6xl'>webdesigner</h1>
        </div>
        <div className='h-screen flex bg-gray-950 justify-center place-items-center'>
          <h1 ref={welcomRef} id='welcome' className='text-5xl font-bold text-gray-100 font-roboto'>
            Welcom
          </h1>
        </div>
    </div>
  )
}

export default App
