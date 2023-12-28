import React, { useEffect } from 'react'

const Market = (props: any) => {

  useEffect(() => {
    document.title = props.pageTitle;
  })

  return (
    <div>Market</div>
  )
}

export default Market