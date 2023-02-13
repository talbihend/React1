import React from 'react'
import imgdev from '../../imgdev.jpg'
const ProfilePhoto = () => {
  return (
    <div>
      <img src={imgdev} alt='profilephoto' style={{height : '500px', width: "500px", borderRadius: "300px", marginTop: "60px", marginRight: "60px"}}/>
    </div>
  )
}

export default ProfilePhoto
