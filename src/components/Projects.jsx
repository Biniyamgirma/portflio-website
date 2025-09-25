import React from 'react'

function Projects() {
  return (
    <section className="flex w-full flex-col items-center bg-gray-950">
  <div className="flex h-auto w-80/100 items-center justify-center">
    <div className="w-full">
      <button className="my-4 rounded-full bg-[#3939395C] px-4 py-2 text-[#FF9853]">Milestones</button>
      <h4 className="text-4xl font-semibold wrap-break-word text-[#FFFFFF] md:w-70/100">Token Sale Phases & Milestones</h4>
      <div id="project" className="my-8 flex h-auto w-70/100 flex-col">
        <button className="max-w-[120px] rounded-full bg-[#FF9853] px-4 py-2 text-white"><a href="#">Project Link</a></button>
        <p className="mt-4 min-w-full wrap-anywhere text-white">Project 1 - Ethiopian Missing Person Finding System</p>
        <div className="flex w-full flex-col">
          <div className="mt-4 flex w-full justify-between">
            <h6 className="text-gray-700">Progress</h6>
            <h6 className="text-white">100%</h6>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div className="bg-white-600 h-full rounded-full" style="width: 100%;"></div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <h4 className="text-white">Tech stack Used:</h4>
          <div className="mt-2 flex items-center space-x-2">
            <span className="size-2 rounded-full bg-amber-50"></span>
            <p className="font-semibold text-gray-600 uppercase">react</p>
          </div>
          <div className="mt-1 flex items-center space-x-2">
            <span className="size-2 rounded-full bg-amber-50"></span>
            <p className="font-semibold text-gray-600 uppercase">Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full">
      <img className="h-70 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1731435265797-136ba0b95cda?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8OTl8fHx8fHx8fDE3NTg3ODU0NjB8&ixlib=rb-4.1.0" alt="" />
    </div>
  </div>
</section>
  )
}

export default Projects;