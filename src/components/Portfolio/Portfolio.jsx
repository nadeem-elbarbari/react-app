import "./Portfolio.css";

function Portfolio() {

  return (
    <>
      <div className='portfolio py-3'>
        <h2>PORTFOLIO COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <span className='left-line'></span>
          <span>⭐</span>
          <span className='right-line'></span>
        </div>
        <div className='container my-3'>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/poert1.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/port2.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/port3.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/port3.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/port2.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item'>
                <img
                  className='w-100'
                  src={require("./images/poert1.png")}
                  alt=''
                />
                <div className='layer'>
                  <div className='icon'>
                    <i className='bx bx-plus-circle'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Portfolio;
