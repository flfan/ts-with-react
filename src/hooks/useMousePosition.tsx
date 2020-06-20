import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})
  useEffect(() => {

    function updatePosition(e: MouseEvent) {
      setPositions({x: e.clientX, y: e.clientY})
      e.stopPropagation()
    }

    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return positions
}

export default useMousePosition