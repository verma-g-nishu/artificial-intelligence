import React from 'react'
import { title } from '../config/Config'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row align-items-center flex-row-reverse ">
          <div className="col-md-12 col-sm-12 mt-3 mt-lg-0 text-center">
            <p>
              Copyright © 2023 <a href="#">{title}</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer