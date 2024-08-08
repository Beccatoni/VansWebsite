import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComp = () => {
    const error = useRouteError()

    console.log(error)
  return (
    <>
    <p>Error: {error.message}</p>
    <pre>{error.status} - {error.statusText}</pre>
    </>
  )
}

export default ErrorComp