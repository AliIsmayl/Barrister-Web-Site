import React from 'react'
import './upcomingSection.scss'

function UpcomingSection() {
  return (
    <section id='upcomingSection'>
      <div className="upBox">
        <div className="line"></div>
        <p>Service</p>
      </div>
      <div className="downBox">
        <div className="cart">
          <div className="numberBox">
            <h1>07</h1>
            <p>January</p>
          </div>
          <div className="middleBox">
            <h1>Student Festival</h1>
            <p>Grand Central Park</p>
            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
          </div>
          <div className="imageBox">
            <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
          </div>
        </div>
        <div className="cart">
          <div className="numberBox">
            <h1>07</h1>
            <p>January</p>
          </div>
          <div className="middleBox">
            <h1>Open day in the Univesrsity campus</h1>
            <p>Grand Central Park</p>
            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
          </div>
          <div className="imageBox">
            <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp" alt="" />
          </div>
        </div>
        <div className="cart">
          <div className="numberBox">
            <h1>07</h1>
            <p>January</p>
          </div>
          <div className="middleBox">
            <h1>Student Graduation Ceremony</h1>
            <p>Grand Central Park</p>
            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
          </div>
          <div className="imageBox">
            <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingSection