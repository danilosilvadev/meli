import React, {
  useState
} from 'react'

function useInitialRender () {
  const [pending, setPending] = useState(true)
  const [error, setError] = useState('')
  const initialHook = {
    pending: {
      value: pending,
      update: setPending
    },
    error: {
      value: error,
      update: setError
    }
  }
  return initialHook
}

export default useInitialRender
