import React, { useContext } from 'react'
import EmailContext from '../context/EmailContext'
import EmailCard from '../components/EmailCard'
import EmailBody from '../components/EmailBody'


// import Emails from '../components/Emails'

function Unread() {
  const {emails, currEmail} = useContext(EmailContext)
  return (
    <div className='container'>
        <div className="master">
            {
                emails.map((el, idx) => (
                    <EmailCard key={idx} el = {el} readStatus = {el.isRead}/>
                ))
            }
        </div>
        <div className="slave">
            <EmailBody />
        </div>
    </div>
  )
}

export default Unread