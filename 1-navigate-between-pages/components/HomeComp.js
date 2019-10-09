import React from 'react'
import "./styles/HomeComp.css"

export default function HomeComp() {
  return (
    <div className="home-page">
      <h1>ALLEN INDEPENDENT SCHOOL DISTRICT</h1>
      <h2>Where Eagles Soar!</h2>
      <div className="home-image">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yBMCUTfo6YE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
