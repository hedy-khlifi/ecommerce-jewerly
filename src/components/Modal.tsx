import React from 'react'
type props = {
    handleShowModal: () => void;
}

function Modal({handleShowModal}:props) {
  return (
      <div onClick={handleShowModal} className="w-full h-full absolute top-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md">
          <input type="text" placeholder='enter your name' />
    </div>
  )
}

export default Modal