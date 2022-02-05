import React from 'react'

export default function PatientDetailbymail() {
  return (
    <div>
    <div className="form-group">
    <input type="text"
        placeholder="Search Patient by choosing any parameter"
        name="searchByName"
        className="form-control"
        onChange={this.onChangeSearchByName} />
</div>
<hr />
</div>
    
  )
}
