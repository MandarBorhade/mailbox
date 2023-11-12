import { useState, useEffect } from "react";
import EmailContext from "./EmailContext";


const EmailContextProvider = ( {children} ) => {
    
    const [emails, setEmails] = useState([])
    const [currEmail, setCurrEmail] = useState([])


    const handleDateformat = (el) => {
        let date = new Date(el.date)
        let time = ""
        if (date.getHours() >= 12) {
          time = "0" + date.getHours() % 12 + ":" +((parseInt(date.getMinutes()/5)*5).toString().length==2?(parseInt(date.getMinutes()/5)*5).toString():"0"+(parseInt(date.getMinutes()/5)*5).toString()) +"pm"
          }
        else{
          time = "0" + date.getHours() + ":" +((parseInt(date.getMinutes()/5)*5).toString().length==2?(parseInt(date.getMinutes()/5)*5).toString():"0"+(parseInt(date.getMinutes()/5)*5).toString()) +"am"
          }
        
        let date_format_str = (date.getDate().toString().length==2?date.getDate().toString():"0"+date.getDate().toString())+"/"+((date.getMonth()+1).toString().length==2?(date.getMonth()+1).toString():"0"+(date.getMonth()+1).toString())+"/"+date.getFullYear().toString()+' '+time
  
  
      return date_format_str
      }

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
        <EmailContext.Provider value={{emails, setEmails, currEmail, setCurrEmail, handleDateformat}}>
        {children}
        </EmailContext.Provider>
    )
}

export default EmailContextProvider