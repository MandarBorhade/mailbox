import { useState, useEffect } from "react";
import EmailContext from "./EmailContext";


const EmailContextProvider = ( {children} ) => {
    
    const [emails, setEmails] = useState([])
    const [currEmail, setCurrEmail] = useState([])

    const fetchEmails = async () => {
        const emailsUrl = `https://flipkart-email-mock.now.sh/`
        const response = await fetch(emailsUrl)
        const data = await response.json()

        const newData = data.list.map((el,idx) => {
        return {
        ...el,
        isRead:false,
        isFav:false
        }
        })

        setEmails(newData)
    }

    useEffect(() => {
        fetchEmails()
    }, [])


    return(
        <EmailContext.Provider value={{emails, setEmails, currEmail, setCurrEmail}}>
        {children}
        </EmailContext.Provider>
    )
}

export default EmailContextProvider