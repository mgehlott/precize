import React from 'react'

const MyBotton = ({onSubmit,text}) => {
  return (
        <div className="btnContainer">
        <button className="btn" onClick={onSubmit}>
          {text}
        </button>
      </div>
  )
}

export default MyBotton
