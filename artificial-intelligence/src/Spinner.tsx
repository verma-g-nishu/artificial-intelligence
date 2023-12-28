import React from 'react';

function Spinner() {
  return (
    <>
      <tr className='spinner_ds text-center'>
        <div className='spinner-main'>
            <div className="spinnerWrap">
              <div className="spinner" id="spinner5"></div>
              <p className='text-center ' style={{color: '#fff'}} > Loading <span className='dot-1 ml-2'></span>  <span className='dot-2'></span>  <span className='dot-3'></span>  <span className='dot-4'></span></p>
            </div>
        </div>
      </tr>
    </>
  )
}

export default Spinner
