import React from 'react'
import { Button } from 'react-bootstrap'

export default function MainPage() {
  return (
    <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
    , position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
     height: '100%',
    opacity: .8,
    content: '""',
    display: 'block',
    marginTop:0
    }}>
      <Button onClick={()=>{window.location = "/login";}}>login</Button>
     
    </div>
  )
}
