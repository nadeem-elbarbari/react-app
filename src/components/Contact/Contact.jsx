import "./Contact.css";

function Contact() {
  return (
    <>
      <div className='form justify-content-center flex-column align-items-center d-flex'>
        <div className='contact'>
          <h2>CONTACT COMPONENT</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <span className='left-line'></span>
            <span>⭐</span>
            <span className='right-line'></span>
          </div>
          <div className='container py-3'></div>
        </div>
        <div className='container py-5 justify-content-center flex-column align-items-center d-flex w-75'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 my-2'
            placeholder='userName'
          />
          <input
            type='number'
            name=''
            id=''
            className='w-100 my-2'
            placeholder='userAge'
          />
          <input
            type='email'
            name=''
            id=''
            className='w-100 my-2'
            placeholder='userEmail'
          />
          <input
            type='password'
            name=''
            id=''
            className='w-100 my-2'
            placeholder='userPassword'
          />
          <button type='button'>Send Message</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
