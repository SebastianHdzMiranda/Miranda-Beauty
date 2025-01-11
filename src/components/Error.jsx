import React from 'react'

function Error({children}) {
  return (
    <p className='errorText'>{children}</p>
  )
}

export default Error