import React from 'react'
import { Table,Container } from 'react-bootstrap';
export default function Ambulance() {
    return (
        <div  >
   
     <Container fluid='sm'color='secondary'style={{width:'800px'}} >  
     <h5>Ambulance Details</h5>    
  <Table  bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10}>
    <thead>
       
      <tr>
        <th>#</th>
       
        <th>Ambulance <br/>Owner Name</th>
        <th>Ambulance No.</th>
       
        <th> Call For Details</th>
       
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Akhilesh Kumar</td>
        <td>121</td>
        <td>8190435674</td>
       
      </tr>
      <tr>
        <td>2</td>
        <td>Alok Kumar</td>
        <td>122</td>
        <td>8165454674</td>
      </tr>
      <tr>
      <td>3</td>
        <td>Anurag Panday</td>
        <td>123</td>
        <td>8168735674</td>
      </tr>
      <tr>
      <td>4</td>
        <td>Alankarit Sinha</td>
        <td>124</td>
        <td>8165437674</td>
      </tr>
      <tr>
      <td>5</td>
        <td>Vinay Chaurasiya</td>
        <td>125</td>
        <td>8160035674</td>
       
      </tr>
      <tr>
      <td>6</td>
        <td>Ram Avatar</td>
        <td>126</td>
        <td>8169037674</td>
      </tr>
      <tr>
      <td>7</td>
        <td>Shubham Gupta</td>
        <td>127</td>
        <td>8165435674</td>
       
      </tr>
     
     
    </tbody>
  </Table>
 
  </Container> 
        </div>
       
    )
}