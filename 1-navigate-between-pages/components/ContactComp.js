import React from 'react'
import './styles/ContactComp.css';

export default function ContactComp() {
  return (
    <div className="contact-main">
      <img src="https://www.allenisd.org/cms/lib/TX01001197/Centricity/Domain/65/GraduationCapsCrop.jpg"></img>
      <div className="contact-secondary">
        <section>
          <h1>About Allen ISD</h1>
          <p>
            The Allen Independent School District serves the rapidly growing
            city of Allen, Texas, a suburban community located 23 miles north of
            Dallas. Student enrollment has more than doubled since 1989,
            bringing the current number of students to more than 20,780 in
            grades K-12. Students attend one of 18 elementary schools, three
            middle schools, one freshman center and one high school.
          </p>
          <h1>Enrollment Increases</h1>
          <p>
            Allen ISD enrollment has grown steadily since the early 1990s. The
            district is currently growing at a rate of about four percent.
            Regardless of enrollment increases, Allen ISD is committed to
            maintaining acceptable student-to-staff ratios and class sizes
            through the hiring of additional staff or the distribution of
            students to "sister" campuses if necessary.
          </p>
          <p>
            Elementary students enrolling in Allen ISD for the first time may be
            assigned to a school outside of their attendance area if no space
            exists in their grade level.{' '}
          </p>
        </section>
        <section className="contact-info">
          <h1>Contact Information</h1>
          <h4>
            612 E. Bethany Drive
            <br />
            Allen, Texas 75002
            <br />
            972-727-0511
            <br />
            mailing address: P.O. Box 13, Allen, Texas 75013
            <br />
            email: publicinfo@allenisd.org
            <br />
          </h4>
          <h3>School Hours for Students</h3>
          <h4>
            Elementary School, K-6: 7:45 a.m. - 2:55 p.m.
            <br />
            Middle School, 7-8: 8:20 a.m. – 3:30 p.m. <br />
            Lowery Freshman Center: 8:45 a.m. - 4:05 p.m.
            <br />
            Allen High School: 8:50 a.m. - 4:10 p.m.
            <br />
          </h4>
          <h3>Administration Office</h3>
          <h4>
            Monday - Thursday 8 a.m. - 4:30 p.m.
            <br />
            Friday 8 a.m. - 4:00 p.m.
          </h4>
          </section>
      </div>
      </div>
  )
}
