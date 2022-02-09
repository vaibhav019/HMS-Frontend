import React from 'react'
import { Button } from 'react-bootstrap'

export default function MainPage() {
  return (
    <div>
      <Button onClick={()=>{window.location = "/userhome";}}>User</Button>
      <Button onClick={()=>{window.location = "/adminhome";}}>Admin</Button>
    </div>
  )
}
