import React from 'react'
import "./cards.css"

function cards({name,desc,image}) {
  return (
    <>
    <div className='cards'>
    <a
  href="#"
  className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className=""
    src={image}
    // alt="" style={{width:"350px", height:"150px"}}
  />
  <div className="flex flex-col justify-between p-4 leading-normal w-[400px] ">
    <h2 className="">
      {name}
    </h2>
    <h2>usman</h2>
    <p className="">
      {desc}
    </p>
  </div>
</a>
</div>


    </>
  )
}

export default cards