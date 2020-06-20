import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  let [like, setLike] = useState(0)
  let [on, setOn] = useState(true)
  useEffect(() => {
    document.title = `点击了${like}次~`
    console.log('click')
  }, [like])
  return (
    <>
      <button
        style={{width: 80, height: 40, marginBottom: 20}}
        onClick={(e) => {setLike(++like);e.nativeEvent.stopImmediatePropagation()}}
      >{like}
      </button>
      <button
        style={{width: 80, height: 40}}
        onClick={(e) => {setOn(!on);e.nativeEvent.stopImmediatePropagation()}}
      >{on ? "ON" : "OFF"}
      </button>
    </>
  )
}

export default LikeButton