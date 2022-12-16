import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState({})

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      try {
        const response = await fetch(url)
        const res = await response.json()
        setData(res.data)
      } catch (err) {
        console.error(err)
        setError(true)
      }
    }

    fetchData()
  }, [url])

  return { data, error }
}
