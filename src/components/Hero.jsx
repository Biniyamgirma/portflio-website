import React from 'react'
// polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0);
// }
function Hero() {
  return (
    <nav class="main-section-padding-x h-full w-full py-4">
  <div class="hidden h-full items-center justify-between md:flex">
    <div class="flex flex-col space-y-3 text-2xl leading-tight font-bold text-gray-700 uppercase">
      <div class="mb-0 p-0">Biniyam</div>
      <div class="-mt-3">girma alemu</div>
    </div>
    <ul class="flex items-center justify-center space-x-46 font-semibold">
      <li><span>[</span><a href="">Home</a><span>]</span></li>
      <li><span>[</span><a href="">About</a><span>]</span></li>
      <li><span>[</span><a href="">Project</a><span>]</span></li>
    </ul>
    <div>
      <a href="" class="text-color pr-4 font-semibold uppercase underline">contact</a>
    </div>
  </div>

  <div class="flex h-full items-center justify-between md:hidden">
    <div class="flex flex-col space-y-3 text-sm leading-tight font-bold text-gray-700 uppercase">
      <div class="mb-0 p-0">Biniyam</div>
      <div class="-mt-1">girma alemu</div>
    </div>
    <div>
      <svg class="size-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18H10" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 12L16 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  </div>
  <ul class="flex flex-col items-center space-y-12 font-semibold md:hidden">
    <li><span>[</span><a href="">Home</a><span>]</span></li>
    <li><span>[</span><a href="">About</a><span>]</span></li>
    <li><span>[</span><a href="">Project</a><span>]</span></li>
  </ul>
  <button class="my-4 w-full rounded-lg bg-gray-700 px-4 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-600 md:hidden">
    Contact
    <span></span>
  </button>
</nav>
<section class="main-section-padding-x mt-4 flex h-screen w-full flex-col items-start justify-center">
  <div class="flex flex-col justify-start">
    <p class="-mb-12 uppercase">based in EThiopia</p>
    <div class="flex items-end justify-center">
      <h1 class="text-[12rem] font-bold text-gray-700 uppercase z-50 shadow-2xs">Fullstack</h1>
      <h1 class="text-end text-2xl font-semibold">Developer</h1>
    </div>
  </div>
  <div class="relative flex max-h-70/100 w-40/100 justify-end self-center  bg-green-300">
    <div class="absolute left-2  z-10 bottom-0 h-[200px] w-60/100 bg-gray-500 flex flex-col justify-end text-2xl text-amber-50 pl-3 pb-2">
      <p>/hello</p>
      <p>/hello from et</p>
      <p>/are you there</p>
    </div>
    <div class="z-30 -mt-20 h-[400px] clip-path-for-img">
      <img class="max-h-full max-w-full object-contain border-2 border-amber-600 " src="https://images.unsplash.com/photo-1738351141968-aa62a12c4285?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  </div>
  <div class="flex mt-12  bg-amber-400 w-full justify-center items-center font-semibold text-black">
    <p class="text-md text-center w-40/100">I’m experienced web and ux/ui designer, who design memorable web experiences for brands OF ALL SIZES</p>  
  </div>
  <div class="flex flex-col mt-12 items-end w-full"><a href="" class=" ">
    <div class="flex">
      <h1>Recent Work</h1>
    <span>-></span></div>
  
  <p class="uppercase text-2xl">Ethiopian missing person locating system</p>
  </a></div>
   <div class="flex flex-col mt-6 w-full"><a href="" class=" ">
    <div class="flex">
      <h1>avalabel for colaburation</h1>
    <span>-></span></div>
  
  <p class="text-2xl ml-14">biniyam@gmail.com</p>
  </a></div>
</section>
<section class="mt-32 w-full ">
 <h1 class="text-9xl uppercase text-center mb-8">about me</h1>
 <div class="w-full h-screen bg-gray-900 main-section-padding-x pt-8 flex justify-between">
   <div class="text-white text-6xl"><p>2/5</p></div>
   <div class="w-60/100 uppercase text-6xl text-wrap text-white ">
   <p class="text-amber-50 text-2xl">for me</p>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sapiente quisquam rerum doloribus sunt suscipit consequatur ullam cumque quae eos quam quidem, repellat laudantium fuga similique iste vero odio at deleniti</p>
   </div>
  <p class="text-white text-4xl uppercase">dsgn/2</p>
 </div>
</section>
  )
}

export default Hero