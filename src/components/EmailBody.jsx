import React, { useContext } from 'react'
import EmailContext from '../context/EmailContext'

function EmailBody() {

   const {currEmail, setEmails, emails} = useContext(EmailContext)



   const handleFavClick = () => {
    
    setEmails((prev) => {
        return prev.map((item) => {
            if (currEmail.id == item.id) {
                return {...item, isFav:true}
            }
            return item
        })
    })

   }


   const renderEmailBody = () => {
    document.querySelector('.email-body-rightcol-content').innerHTML = currEmail.body
   }

  return (
    <div className='email-body'>
        <div className="email-body-leftcol">
            <div className="circle">
                {
                    emails.map((el) => {
                        if(el.id == currEmail.id) {
                            return (el.from.name.charAt(0).toUpperCase())
                        }
                    })
                }
            </div>
        </div>

        <div className="email-body-rightcol">
            <div className='email-body-rightcol-header'>
                {
                    emails.map((el) => {
                        if(el.id == currEmail.id) {
                            return <p>{el.subject}</p>
                        }
                    })
                }

                <button onClick={handleFavClick}>Mark as favorite</button>
            </div>

            <div className='email-body-rightcol-content'>
                {currEmail.body && renderEmailBody()}
            </div>
        </div>
    </div>
  )
}

export default EmailBody