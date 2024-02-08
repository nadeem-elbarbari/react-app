import "./Hero.css";
import i from './images/avataaars.png'


function Hero() {
  return (
    <>
      <div className='hero text-white'>
        <img src={i} alt='hero' />
        <h2>START FRAMEWORK</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <span className='left-line'></span>
          <span>⭐</span>
          <span className='right-line'></span>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}

export default Hero;
