
import React, { useState, useEffect } from 'react'

import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
export default function BookApointmentPage() {
    return (
        <div>
            <div>

                <container>

                    <Col sm={4}></Col>
                    <Row>
                        <Col>  <Button onClick={() => window.location = "/book-appoinment"}>Book Another Appointment</Button>{'  '}<Button onClick={() => window.location = "/userhome"}>Not Now</Button>{' '}</Col>
                        <Col></Col>

                    </Row>

                </container>

            </div>
        </div>
    )
}
