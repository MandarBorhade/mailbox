import React, { useContext } from 'react'
import EmailContext from '../context/EmailContext';
 

function EmailCard( {el, readStatus} ) {

    const {setEmails, setCurrEmail, handleDateformat} = useContext(EmailContext)
    
    //https://flipkart-email-mock.vercel.app/?id=1

    const getCurrEmailBody = async (iid) => {
        let emailBodyUrl = `https://flipkart-email-mock.vercel.app/?id=${iid}`

        const response = await fetch(emailBodyUrl)
        const data = await response.json()

        setCurrEmail(data)
    }

    const handleCardClick = (e) => {

        setEmails((prev) => {
            return prev.map((item) => {
                if (el.id == item.id) {
                    return {...item, isRead:true}
                }
                return item
            })
        })

        e.target.parentNode.parentNode.classList.add('extended')
        getCurrEmailBody(el.id)
    }




  return (
    <div className={readStatus ? 'card active':'card'} onClick={handleCardClick}>
        <div className="card-leftcol">
            <div className="circle">
                {el.from.name.charAt(0).toUpperCase()}
            </div>
        </div>
        <div className="card-rightcol">
            <div>
                <p>From: <span>{el.from.name[0].toUpperCase() + el.from.name.slice(1)}</span><span>&lt;{el.from.email}&gt;</span></p>
                <p>Subject: {el.subject}</p>
            </div>
            <p>{el.short_description}</p>
            <div>
                <p>{handleDateformat(el)}</p>
                {el.isFav && <p>Favorite</p>}
            </div>
        </div>
        
        
    </div>
  )
}

export default EmailCard