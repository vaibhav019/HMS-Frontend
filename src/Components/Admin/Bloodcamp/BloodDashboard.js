import React from 'react'
import { Link } from 'react-router-dom'

export default function BloodDashboard() {
  return (
    <div>
      <h4>work in Progress....</h4>
      <Link to="/blood-request-data" tag="a" action >Blood Requests data</Link>||
      <Link to="/blood-donor-data" tag="a" action >Blood Donors data</Link>
    </div>
  )
}
