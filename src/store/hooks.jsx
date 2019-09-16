import React, { useState } from 'react'

function useInitialRender() {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  return {
    pending: {
      value: pending,
      update: setPending,
    },
    error: {
      value: error,
      update: setError,
    },
  }
}

export default useInitialRender
