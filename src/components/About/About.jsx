import "./About.css";

function About() {
  return (
    <>
      <div className='about'>
        <h2>ABOUT COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <span className='left-line'></span>
          <span>⭐</span>
          <span className='right-line'></span>
        </div>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className='col-md-6'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
