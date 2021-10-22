import React, { useState } from 'react'
import {  Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import NewConversationModal from './NewConversationModal'
import '../css/sidebar.css';

export default function Sidebar2({ id }) {
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className="w-40 p-10 bg-dark">

    <h3> Conversations </h3><hr />
            <Conversations />

        <Button onClick={() => setModalOpen(true)} className="rounded-5 j-down">
          New Conversation
        </Button>

      <Modal show={modalOpen} onHide={closeModal}>
          <NewConversationModal closeModal={closeModal} />
      
      </Modal>

    </div>
  )
}
