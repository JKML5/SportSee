/**
 * Fetch data from URL
 * @see https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6
 */

import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
  }, [url])

  return { data, error }
}
