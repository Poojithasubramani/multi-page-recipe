import React from 'react'
import '../../styles/About.css'


export default function About() {
  return (
    <>
       
<section className="about-section py-5">
  <div className="container-fluid px-4">
    <div className="row align-items-center g-5">

      {/* Left Side Image */}
      <div className="col-lg-6">
        <div className="about-image">
          <img
            src="/about.jpeg"
            alt="Good Food Good Mood"
            className="img-fluid w-100"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="col-lg-6">
        <div className="about-content">

          <h6 className="about-subtitle">
            <span></span> About TastyBites
          </h6>

          <h2 className="about-title">
            Our Restaurant <span>Story</span>
          </h2>

          <p className="about-description">
            At TastyBites, we believe food brings people together.
            Our recipes are crafted with fresh ingredients,
            traditional flavors and a touch of love.
            Whether you're a beginner or a cooking expert,
            you'll find something special here!
          </p>

          {/* Features */}
          <div className="row text-center about-features">

            <div className="col-4">
              <div className="feature-icon">
                <i className="bi bi-egg-fried"></i>
              </div>
              <h6>Fresh Ingredients</h6>
              <p>100% Natural</p>
            </div>

            <div className="col-4">
              <div className="feature-icon">
                <i className="bi bi-heart-fill"></i>
              </div>
              <h6>Easy Recipes</h6>
              <p>For Everyone</p>
            </div>

            <div className="col-4">
              <div className="feature-icon">
                <i className="bi bi-emoji-smile-fill"></i>
              </div>
              <h6>Delicious Taste</h6>
              <p>Always</p>
            </div>

          </div>

        
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
