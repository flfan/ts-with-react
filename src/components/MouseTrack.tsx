import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('add effect', positions.x)

    function updatePosition(e: MouseEvent) {
      console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
      e.stopPropagation()
    }

    document.addEventListener('click', updatePosition)

    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updatePosition)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('before render', positions.x)
  return (<p>X: {positions.x}, Y: {positions.y}</p>)
}

export default MouseTracker