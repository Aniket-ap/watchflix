import React from 'react'

const SideBar = () => {
  return (
    <div className='p-5 shadow-md w-52 h-[90vh]'>
      <ul>
        <li>Home</li>
        <li>Sorts</li>
        <li>Live</li>
        <li>Game</li>
      </ul>
      <br/>
      <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <br/>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar