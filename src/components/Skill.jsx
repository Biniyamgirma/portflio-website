import React,{useRef} from 'react'
import {useGSAP} from 'react-gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Skill() {
  const ref = useRef(null);
  useGSAP(()=>{
    
  },{})
  return (
    <section ref={ref} className="bg-gray-950 w-full h-100 flex flex-col justify-center items-center overflow-x-clip">
  <h1 className="text-white font-bold uppercase text-4xl mb-8">Soft Skills</h1>
  <div className="w-1000 h-32 bg-[#121212] -rotate-4  py-8">
    <div className="flex items-center justify-center h-full  space-x-4">
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#78B9B5"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Verbal Communication</p>
      <span className="text-[#FFFFFF] font-bold text-2xl mx-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#B13BFF"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Public Speaking</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#FF9853"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Teamwork</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#FFCC00"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Collaboration</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#EF88AD"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Critical Thinking</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#1F7D53"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Creativity</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#DDE6ED"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Time Management</p>
      <span className="text-[#FFFFFF] font-bold text-2xl ml-2">lL</span>
      <span className="text-[#FFFFFF]">
       <svg className="size-8" viewBox="0 0 24 24" fill="none" >
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#03C988"/>
        </svg>
      </span>
      <p className="font-semibold text-[#6B6B6B] new-font-ibm">Work Ethic</p>
    </div>
  </div>
</section>
  )
}

export default Skill;