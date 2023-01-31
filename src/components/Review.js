import React from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Review({ reviewData }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className='ms-4'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
              reviewData.map(item =>

                <div className='p-2 mt-1'>
                  <h3>Name:{item.name}, Date:{item.date}</h3>
                  <h6>Rating:{item.rating}</h6>
                  <p>{item.comments}</p>
                </div>
              )
            }
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Review