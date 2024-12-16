import React from 'react'
import Userinfo from './Userinfo'
import Chatlist from './Chatlist'

const List = () => {
  return (
    <div className='flex-[1] flex flex-col'>
      <Userinfo />
      <Chatlist />
     
    </div>
  )
}

export default List