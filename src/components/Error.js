import React from 'react'
import {useRouteError} from 'react-router-dom';

function Error() {
    let {statusText,status} =useRouteError()
  return (
    <div className='text-center'>
        <h1 className='text-gray-300 text-5xl font-bold'>{status}</h1>
        <p className='text-sm'>{statusText}</p>
    </div>
  )
}

export default Error