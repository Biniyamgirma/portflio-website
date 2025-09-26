import React from 'react'

const projects = [
  {
    id: 1,
    title: "Full-stack System for finding missing persons in Ethiopia",
    description: "Ethiopian Missing Person Finding System",
    progress: 100,
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1731435265797-136ba0b95cda?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8OTl8fHx8fHx8fDE3NTg3ODU0NjB8&ixlib=rb-4.1.0",
    projectLink: "#",
    caseStudyLink: "#",
    alignment: "left"
  },
  {
    id: 2,
    title: "Deep Learning Project",
    description: "Ethiopian Birr Banknote Classifier",
    progress: 100,
    techStack: ["Python","MobileNetV2 model to accurately classify Ethiopian currency notes.","Keras","Tensorflow","Pandas","Numpy","Matplotlib"],
    imageUrl: "https://images.unsplash.com/photo-1731435265797-136ba0b95cda?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8OTl8fHx8fHx8fDE3NTg3ODU0NjB8&ixlib=rb-4.1.0",
    projectLink: "#",
    caseStudyLink: "#",
    alignment: "right"
  },
  {
    id: 3,
    title: "Full-stack PHP Project",
    description: "Interactive Quiz Platform",
    progress: 100,
    techStack: ["HTML","CSS","JAVASCRIPT","PHP","Bootstrap","Jquery"],
    imageUrl: "https://images.unsplash.com/photo-1731435265797-136ba0b95cda?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8OTl8fHx8fHx8fDE3NTg3ODU0NjB8&ixlib=rb-4.1.0",
    projectLink: "#",
    caseStudyLink: "#",
    alignment: "right"
  },
]

function Projects() {
  return (
    <section className="flex w-full flex-col items-center bg-gray-950">
      
      {projects.map((project,index)=>(
         
    <div key={index} className={index % 2 == 0 ? `flex flex-row-reverse h-auto w-80/100 items-center justify-between` : `flex h-auto w-80/100 items-center justify-between`}>
    <div className="w-50/100 ">
      <button className="my-4 rounded-full bg-[#3939395C] px-4 py-2 text-[#FF9853]">Projects I Had Worked On</button>
      <h4 className="text-4xl font-semibold wrap-break-word text-[#FFFFFF] md:w-70/100">{project.title}</h4>
      <div id="project" className="my-8 flex h-auto w-70/100 flex-col">
        <div className='flex space-x-4 w-full items-center'>
          <button className="max-w-[120px] rounded-full bg-[#FF9853] px-4 py-2 text-white font-semibold"><a href={`${project.projectLink}`}>Project Link</a></button>
          <button className='max-w-[120px] rounded-full border-2 border-[#FF9853] px-4 py-2 text-[#FF9853] font-semibold'><a href={`${project.caseStudyLink}`}>Case Study</a></button>
        </div>
        <p className="mt-4 min-w-full wrap-anywhere text-white">Project {project.id} - {project.description}</p>
        <div className="flex w-full flex-col">
          <div className="mt-4 flex w-full justify-between">
            <h6 className="text-gray-700">Progress</h6>
            <h6 className="text-white">{project.progress}%</h6>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div className="bg-white-600 h-full rounded-full" style={{ width: `${project.progress}%`}}></div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <h4 className="text-white">Tech stack Used:</h4>
         { project.techStack.map((tech,index)=>(
            <div key={index} className="mt-2 flex items-center space-x-2">
            <span className="size-2 rounded-full bg-[#FF9853]"></span>
            <p className="font-semibold text-gray-600 uppercase">{tech}</p>
          </div>
          )) }
        </div>
      </div>
    </div>
    <div className="w-40/100">
      <img className="h-70 w-full rounded-lg object-cover" src={project.imageUrl} alt="" />
    </div>
  </div>
      ))}
  

    </section>
  )
}

export default Projects;