import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({timeData}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday | {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday |{timeData.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday |{timeData.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday |{timeData.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday |{timeData.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday |{timeData.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday |{timeData.Sunday}</ListGroup.Item>


                    </ListGroup>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Operatingtime