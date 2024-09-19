import './App.css'

 



function App() {
  
  return (
    <>
    <div className="container">
      {/* nav open */}
      <div className="nav">
        <nav>
          <img src="https://static.tneaonline.org/tn_logo.png" alt="TNEA" />
          <ul>
            <li><h3>GOVERNMENT OF TAMILNADU</h3></li>
            <li><h4>TAMIL NADU ENGINEERING ADMISSIONS-2024</h4></li>
          </ul>
          <button className="btnlogin"><span><i class="bi bi-person"></i></span>Login</button>
        </nav>
      </div>
      {/* nav close */}
      {/* card open */}
      <div className="card">
      <div className="regicon">
     
        <h6>Register form</h6>
      </div>
      <div className="form">
        <form action="">
          <ul>
            <li>
              <label htmlFor="name">NAME </label><br />
              <input id='name' name='name' type="text" placeholder='Enter Your Name' required/>
            </li>
            <li>
              <label htmlFor="sclname">SCHOOL NAME</label><br />
              <input id='sclname' name='school-name' type="text" placeholder='Enter Your School Name' required/>

            </li>
            <li>
            <label htmlFor="hscregno">HSC-REG-NO</label><br />
            <input id='hscregno' name='hsc-reg-no' type="text" placeholder='Enter Your HSC-REG-NO' required/>
            </li>
            <li>
            <label htmlFor="dob">DOB</label><br />
            <input id='dob' name='DOB' type="date" required/>
            </li>
            <li>
            <label htmlFor="contnum">CONTACT NUMBER</label><br />
            <input id='contnum' name='contact-number' type="tel" placeholder='Enter Your Mobile Number' maxLength={10} required/>
           </li>
            <li>
            <label htmlFor="email">EMAIL ID</label><br />
            <input id='email' name='Email' type="email" placeholder='Enter Your Email ID' required/>
            </li>
            </ul>
            <div className="check">
            <input type="checkbox" name="terms&conditions" id="checkbox" />
            <label htmlFor="checkbox"> Agree our <a href="">TERMS & CONDITONS</a></label>
            </div>
            <div className="subbtn">
            <button id='submit' type="submit">Register</button>
            </div>
          
        </form>
      </div>
      </div>
      {/* card close */}
      {/* footer open */}
      <div className="foot">
      <footer>
        <div className="head">
        <p>For all queries call us on a Toll Free Number</p>
        <p>1800-452-0110</p>
        </div>
        <div className="body">
        <div className="ads">
        <p className='ads1'><span><i class="bi bi-house-fill"></i></span> Address</p>
        <p>Directorate of Technical Education (DoTE),</p>
        <p>53, Sardar Patel Road,</p>
        <p>Guindy</p>
        <p>Chennai-600 025</p>
        </div>
        <div className="eml">
        <p><span><i class="bi bi-envelope-at-fill"></i></span> Email</p>
        <p><a href="">tneacare@gmail.com</a></p>
        </div>
        </div>
        <div className="copyright">
        <small><span><i class="bi bi-c-circle"></i></span>2024, TNEA</small>
        </div>
      </footer>
      </div>
      {/* footer close */}
    </div>
    </>
  )
}

export default App
