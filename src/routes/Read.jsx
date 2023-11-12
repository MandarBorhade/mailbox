import React, { useContext } from 'react'
import EmailContext from '../context/EmailContext'
import EmailCard from '../components/EmailCard'
import EmailBody from '../components/EmailBody'

function Read() {
  const {emails, currEmail} = useContext(EmailContext)
  return (
    <div className='container'>
        <div className="master">
            {
                emails.map((el, idx) => (
                    el.isRead && <EmailCard key={idx} el = {el} readStatus = {el.isRead}/>
                ))
            }
        </div>
        <div className="slave">
            <EmailBody />
        </div>
    </div>
  )
}

export default Read