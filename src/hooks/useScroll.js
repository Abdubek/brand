import {useEffect, useState} from "react";

export const useScroll = (init, data, setter) => {
  const [active, setActive] = useState(init)

  useEffect(() => {
    const handleScrollListener = () => {
      let height = window.innerHeight
      if (height < 900) height = 900
      const index = Math.floor(window.pageYOffset / height)
      setActive(setter(data[index]))
    }
    window.addEventListener('scroll', handleScrollListener)
    return () => window.removeEventListener('scroll', handleScrollListener)
  }, [])

  return active
}