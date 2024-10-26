import React from 'react'
import UploadPage from '../UploadPage/UploadPage'
import ProfileMenu from '../Profile/ProfileMenu'
export default function Header() {
  
  return (
    <div><header className='flex'>
    <h1 onClick={()=>{ window.location.href = '/';}}>Rangeela</h1>
    
    <UploadPage />
    <ProfileMenu/>
  </header></div>
  )
}
