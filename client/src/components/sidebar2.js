import React, { useState } from 'react'
import {  Button, Modal } from 'react-bootstrap'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import '../css/sidebar.css';

export default function Sidebar2({ id }) {
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className="p-10 bg-dark">

    <h3> Contacts </h3><hr />
            <Contacts />

        <div className="p-2 small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-5 j-down">
          New Contact
        </Button>

      <Modal show={modalOpen} onHide={closeModal}>
          <NewContactModal closeModal={closeModal} />
        
      </Modal>

    </div>
  )
}
