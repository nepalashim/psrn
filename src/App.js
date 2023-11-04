import { useState } from 'react';
import './App.css';
import { ImLocation } from "react-icons/im";
import { ImMail3 } from "react-icons/im";
import { ImPhone } from "react-icons/im";


function App() {
  const [selected, setSelected] = useState(null)
  const toggle =(i) => {
    if (selected === i){
      return setSelected(null)

    }
    setSelected(i)

  }



  return (
    <>
    <div className="head"><h1>PSRN (Physician for Social Responsibility Nepal)</h1></div>
    <div className="nav">
    <nav>
      <ul className='horbar'>
      
       <li><a href="#home" >Home </a></li>
       <li><a href="#home" >Services </a></li>
       <li><a href="#home" >About </a></li>
      </ul>
      
    </nav>
    </div>
    <div id="right" className="initialcontainer">
      <strong>Supporting Communities: PSRN</strong>
      <p>
        PSRN is a leading ngo based in kathamandu.Established for promotion and protection of social justices,human rights,pro-poor development.
      </p>

    </div>
    <div className="services">SERVICES</div>
    <div className='primeedu'>
    <div id="left" className="edu"><strong>Education Programs</strong>
      <p>
        We provide quality education and access to resources for underpriviledged children, aiming to break the cycle of poverty.
        
        </p>

        </div>

    <div id="centre" className='hlt'><strong>Healthcare Services</strong>
      <p>PSRN as involved as a national care and related issues movement in Nepal.It is actively working to unite, organise and mobile civil society to with sound environment.

      </p>

      </div>
      <div id="right1" className='sustain'><strong>Sustainable Development</strong>
      <p>We provide sustainable pratices, including clean energy, agriculture, and infrastructure for better future.
      </p>

      </div>

    </div>
    
    <div className="features">FEATURES</div>

    <div className="testimonials">TESTIMONIALS</div>
    <div className='primetest'>
    <div id="lefta" className="review1">
      <p>
        <strong>"</strong>PSRN's dedication has transformed our village. They have brought education and health care to our door step.
        
        </p>
        <strong>Ram Sharma</strong>

        </div>

    <div id="centrea" className='review2'>
      <p><strong>"</strong>I am impressed by PSRN's sustainable development projects.They are fully making difference.
      </p>
      <strong>Gopal Verma</strong>

      </div>
      <div id="righta" className='review3'>
      <p><strong>"</strong>PSRN's education programs have opened doors for marginalised children, providing hope for a brighter future.
      </p>
      <strong>Rajesh Khadka</strong>

      </div>

    </div>
   
    <div className="whatwestand">WHAT WE STAND FOR
    

    <p id='whatwe'>PSRN is a dedicated NGO in kathmandu focused on improving lives. We work towards creating sustainable solutions for socio-economic development, education, and healthcare.</p></div>


    
    <div className='faq'>FREQUENTLY ASKED QUESTIONS</div>
    <div className="faqm">
       <div className="accordian">
        {data.map((item,i) =>(
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h3> {item.question}</h3>
              <span>{selected === i ? '-' :'+' }</span>

            </div>
            <div className={selected === i ? 'content show'    
               :'content'}
               >
               {item.answer}

            </div>

          </div>

        )

        )}
        
       </div>
    
    
    
    
    
    </div>
    <div className='con'>CONTACT US</div>
    
    <div className="contact">
      <div className="contentofcontact">Have a question, need assistance? We're just a message away!</div>
      <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <ImLocation size="20px"/>

               
                
              <div className="text">
                <h4>Address</h4>
                <p> Kathamandu, P3 </p>

              </div>
              </div>
            </div>
            <div className="box">
              <div className="icon"><ImMail3 size="20px"/>

              <div className="text">
                <h4>Email</h4>
                <p> contactus@psrn.com </p>

              </div>
              </div>
            </div>
            <div className="box">
              <div className="icon"><ImPhone size="20px"/>
              <div className="text">
                <h4>Call</h4>
                <p> +1 (551) 318-7369</p>

              </div>
              </div>
            </div>
            <div className="contactform">
              <form>
                <p>
                  Your Message to PSRN
                </p>
                <div className="inputbox">
                  <input type='text' name="" required="required"/>
                  <span>Full Name</span>
                  

                </div>
                <div className="inputbox">
                  <input type='text' name="" required="required"/>
                  <span>Email</span>
                  

                </div>
                <div className="inputbox">
                  <textarea required="required"></textarea>

                  <span>Type your Message..</span>
                  

                </div>
                <div className="inputbox">
                  <input type='submit' name='' value="Send"/>
                  

                </div>

              </form>

            </div>
          </div>
        </div>
        
        </div>
        



   
    </>
    
  );
}

const data =[
{
  question: 'What is PSRN mission?',
  answer: 
       'Our mission is to empower communities through sustainable  development and social welfare initiatives.',
       

},
{
  question: 'How can I support PSRN?',
  answer: 
       'Our mission is to empower communities through sustainable  development and social welfare initiatives.',

},
{
  question: 'Where is PSRN located?',
  answer: 
       'Our mission is to empower communities through sustainable  development and social welfare initiatives.',
}
]

export default App;
