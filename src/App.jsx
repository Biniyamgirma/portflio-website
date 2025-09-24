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
          <h1 id='title-1' className='text-6xl'>/Full-stack Developer</h1>
          <h1 id='title-2' className='text-6xl'>/Web Animation Developer</h1>
          <h1 id='title-3' className='text-6xl'>/Backend Developer</h1>
          <div className='absolute bottom-20 left-10 w-60/100 h-32'>
            <p className='text-lg tracking-tight text-gray-700 w-60/100 font-bold  '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae molestiae necessitatibus ea illo? Facilis distinctio veniam inventore eveniet fugit fuga facere, ab beatae repellat vero dolore hic maxime esse? Delectus ipsam ducimus, quae odit ipsum officiis sed quam alias?
            </p>
          </div>
          <div className='absolute bottom-1 right-4 w-30/100 h-120 bg-amber-600'>
          {/* <img src="" alt="" /> */}
          </div>
        </div>
        <div class='h-screen flex flex-col bg-gray-950  place-items-center px-12 py-4'>
   <div class='min-w-full flex justify-between items-center '>
        <h1 class='uppercase text-xl text-white'>biniyam girma</h1>
        <div class='bg-[#5F5F5F29] flex justify-center items-center rounded-full'>
            <div class='flex justify-between w-full p-2'>
            <div class='size-8 rounded-full flex justify-center items-center bg-gray-700 text-amber-50'>
                I
            </div>
            <h2 class='text-sm text-[#727272] uppercase text-center flex justify-center items-center pl-2'>
                Biniyam Girma
            </h2>
            </div>
        </div>
    </div>
          <div className="flex w-full h-full justify-center items-center">
            <h1  id='welcome' class='text-5xl font-bold text-gray-100 font-roboto'>
            Welcom To My Portfolio
          </h1>
          </div>
          <div class="flex space-x-4  h-16 w-full items-center justify-center">
            <button className="bg-white px-4 py-3 rounded-full">Download resume</button>
            <button className="border-2 rounded-full border-white text-white px-4 py-3">Contact Me</button>
          </div>
          <div className="text-white py-4">
            scroll down
          </div>
        </div>
        <section class="min-h-screen bg-gray-950 px-12">
<div class="w-full flex justify-center items-center ">
<img class="max-h-72 object-cover" src="https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8MTR8fHx8fHx8fDE3NTg2OTkwMjh8&ixlib=rb-4.1.0" alt="">
</div>
<div class="w-60/100 pt-6">
  <h1 class="text-9xl text-white">About Me</h1>
  <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, facere quia quasi quisquam quibusdam fuga odio, eum dicta totam blanditiis dolore officia culpa ullam accusamus, provident facilis ipsam consequatur fugiat?</p>
</div>
<!-- <div class="justify-self-end">
  <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis non velit possimus pariatur eaque quidem autem aperiam? Obcaecati, eum voluptatibus sapiente aliquam dolore et repellat, quaerat a porro vel suscipit! Aperiam vitae dolorum cupiditate eum eveniet ullam distinctio nulla?</p> -->
</div>
</section>
    </div>
  )
}

export default App
