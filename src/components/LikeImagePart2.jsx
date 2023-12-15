import React, { useState } from 'react'
import HOC from './HOC'

 function LikeImagePart2(props) {
const {likeImageCounter,handleLikeImageCount}=props

  return (
    <div>
      <button onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
    </div>
  )
}
export default HOC(LikeImagePart2)
