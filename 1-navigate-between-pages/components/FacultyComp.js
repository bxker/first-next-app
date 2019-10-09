import React from 'react'
import './styles/FacultyComp.css'

export default function FacultyComp() {
  return (
    <div className="faculty-main">
      <section>
        <img src="https://www.allenisd.org/cms/lib/TX01001197/Centricity/Domain/31/Prof%20Learning%20homepg.PNG"></img>
      </section>
      <section>
        <h3>
          612 E. Bethany Drive, Allen, TX 75002
          <br />
          972-727-0511 phone
          <br />
          972-727-0434 fax
        </h3>
        <h2>Contacts</h2>
        <h3>
          Nelson Orta - Executive Director, Curriculum and Instruction
          <br />
          Michelle Salas - Coordinator, Professional Learning
          <br />
          Jana Jansson - Administrative Assistant
          <br />
          Natalie Buster - Administrative Assistant (Eduphoria)
          <br />
        </h3>
      </section>
      <section>
        <h1>Mission</h1>
        <h4>
          Allen ISD seeks to inspire, empower, and develop all staff who impact
          learning. Staff development focuses on adult learning that results in
          student learning. In planning, implementation, and evaluation of staff
          development, we ask:
        </h4>
        <ul>
          <li>What do students need to know and be able to do?</li>
          <li>What do educators need to know and be able to do?</li>
          <li>
            What professional learning will ensure educators acquire the
            necessary skills and knowledge for implementation?
          </li>
          <li>How will we know the impact on student learning?</li>
        </ul>
      </section>
    </div>
  )
}
