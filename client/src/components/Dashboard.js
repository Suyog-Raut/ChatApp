import React from 'react'
import Sidebar from './Sidebar';
import Sidebar2 from './sidebar2';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (<div>
    <div className="d-flex" style={{ height: '100vh' }}>
    <Sidebar id={id} />
    {selectedConversation && <OpenConversation />}
      <Sidebar2 id={id} />
    </div>
    </div>
  )
}
