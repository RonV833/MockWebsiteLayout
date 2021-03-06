import { Typography } from '@material-ui/core';
import React, { useRef, useState, useEffect } from 'react';
//useEffect is called every render 
export default function Contact() {
   const fNameRef = useRef(null);
   const lNameRef = useRef(null);
   const emailRef = useRef(null);
   const messageRef = useRef(null);
   const [id, setID] = useState(Date.now);
   const [allContacts, setallContacts] = useState([]);
//allContacts willl collect all the properties in the object
   const handleSubmit = (e) => {

      e.preventDefault();
      const formData = {
         id: id,
         fName: fNameRef.current.value,
         lName: lNameRef.current.value,
         email: emailRef.current.value,
         message: messageRef.current.value,
      };
      //all data in object formData will be stored in allcontacts array spread
      setallContacts([...allContacts, formData])
      alert(JSON.stringify(formData));
      fNameRef.current.value =null;
      lNameRef.current.value=null;
      emailRef.current.value=null;
      messageRef.current.value=null;
      setID(Date.now);
   };
   useEffect(()=>{localStorage.setItem("contact", JSON.stringify(allContacts))},[allContacts]);
   

   const getFormsheet = (e) => {
    e.preventDefault();

    let getFormarray = [];
    getFormarray = JSON.parse(localStorage.getItem("contact"));
    let getFormtable = document.getElementById("formTable");
    console.table (getFormarray);
    
    getFormarray.forEach((listForm, i) => {
        let listRow = getFormtable.insertRow(i+1);
        let y = 0;
        for (let content in listForm) {
            let listCol = listRow.insertCell(y);
            listCol.innerHTML = listForm[content];
            y++
        }
    })
}
   
   return (
      <Typography>
         <form id="form" onSubmit={handleSubmit}>
            <label for="fName">First Name</label>
            <input
               ref={fNameRef}
               id="fName"
               type="text"
               name="fName"
               required
            />
            <br />
            <label for="lName">Last Name</label>
            <input
               ref={lNameRef}
               id="lName"
               type="text"
               name="lName"
               required
            />
            <br />
            <label for="email">Email Address</label>
            <input
               ref={emailRef}
               id="email"
               type="email"
               name="email"
               required
            />
            <br />
            <label for="message">Message</label>
            <textarea
               ref={messageRef}
               cols="20"
               rows="10"
               name="message"
            ></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
         </form>
         <button  onClick={getFormsheet}>Retrieve Form</button>
         <table id="formTable" >
             <tr style={{border:2, backgroundColor:'beige'}}>
                 <td style={{border:2, backgroundColor:'brown'}}>ID</td>
                 <td style={{border:2, backgroundColor:'brown'}}>First NAme</td>
                 <td style={{border:2, backgroundColor:'brown'}}>LAst NAme</td>
                 <td style={{border:2, backgroundColor:'brown'}}>Email</td>
                 <td style={{border:2, backgroundColor:'brown'}}>Message</td>
             </tr>
         </table>
      </Typography>
   );
}