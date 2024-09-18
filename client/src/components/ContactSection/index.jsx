import React from 'react'
import './ContactSection.scss'

function ContactSection() {
  return (
    <section id='contactSection'>
      {/* <div className="leftBox"> */}
        {/* <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, praesentium?</h2> */}
   {/* <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p> */}
   {/* <button>REGISTER NOW</button> */}
      {/* </div> */}
      <div className="rightBox">
        <h2>Contact</h2>
        <form action="">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Service'/>
          <textarea type="text" placeholder='Message'/>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection