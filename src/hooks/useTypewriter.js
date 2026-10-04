import { useEffect, useState } from 'react'

// Types out `fullText` character by character, starting after `startDelay` ms.
// Returns the currently-typed substring and whether typing has finished.
export default function useTypewriter(fullText, { speed = 32, startDelay = 300 } = {}) {
  const [length, setLength] = useState(0)

  useEffect(() => {
    let i = 0
    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setLength(i)
        if (i >= fullText.length) clearInterval(intervalId)
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [fullText, speed, startDelay])

  return {
    typed: fullText.slice(0, length),
    done: length >= fullText.length,
  }
}
