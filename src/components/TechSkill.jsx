import React from 'react'

const skills = [
  {
    icon:"https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
    programmingLangName:"Javascript",
    percentage:70,
    color:"#FF9853"
  },
  {
    icon:"https://cdn-icons-png.flaticon.com/128/17731/17731566.png",
    programmingLangName:"C++",
    percentage:30,
    color:"#FF9853",
  },
  {
    icon:"https://cdn-icons-png.flaticon.com/128/10561/10561605.png",
    programmingLangName:"Java",
    percentage:30,
    color:"#FF9853",
  },
  {
    icon:"https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    programmingLangName:"Python",
    percentage:30,
    color:"#FF9853",
  },
  {
    icon:"https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    programmingLangName:"React",
    percentage:30,
    color:"#78B9B5",
  },
   {
    icon:"",
    programmingLangName:"Express",
    percentage:30,
    color:"#78B9B5",
  },
   {
    icon:"https://cdn-icons-png.flaticon.com/128/919/919825.png",
    programmingLangName:"Node Js",
    percentage:30,
    color:"#78B9B5",
  },
   {
    icon:"https://cdn-icons-png.flaticon.com/128/17661/17661555.png",
    programmingLangName:"Python DeepLearning",
    percentage:30,
    color:"#78B9B5",
  },
   {
    icon:"",
    programmingLangName:"English",
    percentage:30,
    color:"#B13BFF",
  },
   {
    icon:"",
    programmingLangName:"Amharic",
    percentage:70,
    color:"#B13BFF",
  }
];

function TechSkill() {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center bg-gray-950">
  <div className="flex min-w-40/100 flex-col items-center justify-center mt-20">
    <h4 className="text-4xl font-bold text-white my-8">Technical Skils</h4>
    <div className="h-full w-full">
      <div className="flex w-full items-end justify-between my-4">
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-[#DFDFDF]">Skills</h2>
          <p className="text-[#717171]">Frameworks And Programming languages</p>
        </div>
        <div>
          <h2 className="text-[#FF9853]">knowledge(%)</h2>
        </div>
      </div>
    </div>

    {skills.map((skill ,index) => (
      <div key={index} className="flex w-full flex-col mx-2">
      <div className="mt-4 flex w-full justify-between">
        <div className="ml-2 flex" id="skill wraper">
          <span className="mr-2 flex items-center justify-center">
            <img className='size-4 flex justify-center items-center' src={skill.icon} alt="" />
          </span>
          <h3 className="text-[#717171]">{skill.programmingLangName}</h3>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <h3 className="text-[#FFFFFF]">{skill.percentage}%</h3>
          <span className="flex size-2 items-center justify-center rounded-full bg-[#717171]"> </span>
          <p className="text-[#717171]">Allocation</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div className="h-2.5 rounded-full bg-[#B13BFF]" style={{ width: `${skill.percentage}%`,  backgroundColor: skill.color }}></div>
        </div>
      </div>
    </div>
    ))}
      
   
    
  </div>
</section>
  )
}

export default TechSkill;