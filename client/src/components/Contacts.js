import React from 'react'
import { ListGroup , Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} className="bg-dark">
        <Button>  {contact.name} </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
