import React, { useState } from 'react';
import "../Style/contact.css"


const Contact = () => {

const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    number: "",
    message : ""
  });

  let name, value;
  const onChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserMessage({...userMessage, [name]:value})
  }


  const postMessage = async(e) => {
    e.preventDefault()
    const { name, email, number, message} = userMessage

try {
  const res = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name, email, number, message
    })
  })

  const data = await res.json();

  if (!data ||res.status ===422 ) {
    console.log("message not sent");
  window.alert("message not sent"); 
  } else {
    console.log("message sent");
    window.alert("Thank you for your message!"); 
    setUserMessage({message:""})
}

} catch (error) {
  console.log(error);
}

  }
  
  


  return (
    <>
      <div className="contact_form_container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form method='POST' className="myForm text-center ">
                  <header>Connect With Us</header>

                  <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input type="text" className="myInput"  onChange={onChange} placeholder="Enter Your FullName" value={userMessage.name} id="name" name="name" required autoComplete='off' />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input type="number" className="myInput"  onChange={onChange} placeholder="Enter Your Number" id="number"  value={userMessage.number} name="number" required autoComplete="off" />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" className="myInput"  onChange={onChange} placeholder="Enter Your Email" id="email" value={userMessage.email} name="email" required autoComplete="off" />
                  </div>

                  <div className="form-group">
                    <textarea className="myInput" id='message' name='message'  onChange={onChange} placeholder="Enter Your Message" value={userMessage.message} cols="10" rows="5" required  />
                  </div>

                  <input type="submit" className="butt" value="Send Message"  onClick={postMessage} />


                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="myRightCtn">
                <div className="box">
                  <div id='address' className="address">
                    <i id='marker' className="fas fa-map-marker-alt fa-4x "></i>
                    <p id='address' >Shop no. 5/13, Chowbara road, Ambesange galli, Udgir 413517. District: Latur,Maharashtra.</p>
                  </div>
                  <div className="contact">
                    <div>
                      <i id='contactbook' className="fas fa-address-card fa-4x "></i>
                    </div>
                    <div className='details'>
                      <p>Email : workmail7746@gmail.com</p>
                      <p>Telephone : 02385-256382 </p>
                      <p>Whatsapp : 9632257820</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
