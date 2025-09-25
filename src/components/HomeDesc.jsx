import React from 'react'

function HomeDesc() {
  return (
    <div className='w-[260px] flex flex-col space-y-2 text-wrap border-[#292929] absolute bottom-5 right-5 rounded-s-md border-r-2 pr-8'>
        <h1 className="text-xl flex flex-col justify-end items-end text-white">This Time,<span>It’s Us…</span> </h1>
        <p className="flex flex-col w-auto items-end text-[12px] text-[#717171]"><span>RPT is a utility token built with</span> <span>the financial challenges of</span> <span><span className="text-white">Africa</span> in mind.</span> </p>
    </div>
  )
}

export default HomeDesc;