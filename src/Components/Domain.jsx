import React from 'react'

const Domain = ({icon,name,des}) => {
  return (
    <div className='border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105'>
        <div>
      <i className={`${icon} text-4xl text-green-500 hover:text-green-400`} />
        </div>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className='mt-2'>{des}</p>
    </div>
  )
}

export default Domain
