import React, { useState, useEffect, useRef, useContext } from 'react'
import {themeContext} from '../App'

const LikeButton: React.FC = () => {
  let [like, setLike] = useState(0)
  let [on, setOn] = useState(true)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const DOMRef = useRef<HTMLInputElement>(null)

  const theme = useContext(themeContext)
  
  const style1 = {
    color: theme.color,
    background: theme.background
  }

  useEffect(() => {
    if(DOMRef && DOMRef.current){
      DOMRef.current.focus()
    }
  })

  useEffect(() => {
    if(didMountRef.current){
      console.log('this is update')
    }else{
      didMountRef.current = true
    }
  })
  function handleAlertClick() {
    setTimeout(() => {
      console.log('click on ' + likeRef.current++)
    }, 3000);
  }
  useEffect(() => {
    document.title = `点击了${like}次~`
    console.log('click')
  }, [like])
  return (
    <>
    <input type="text" ref={DOMRef}/>
      <button
        style={{width: 80, height: 40, marginBottom: 20, ...style1}}
        onClick={(e) => {setLike(++like);e.nativeEvent.stopImmediatePropagation()}}
      >{like}
      </button>
      <button
        style={{width: 80, height: 40}}
        onClick={(e) => {setOn(!on);e.nativeEvent.stopImmediatePropagation()}}
      >{on ? "ON" : "OFF"}
      </button>
      <button
        style={{width: 80, height: 40}}
        onClick={handleAlertClick}
      >alert
      </button>
    </>
  )
}

export default LikeButton