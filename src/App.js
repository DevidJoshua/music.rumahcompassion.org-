
import React from 'react';
import poster from './poster.jpg'

function App() {
  return (
   <div>
      <div style={{backgroundColor:'black'}} className="size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 ">
      <img src={poster} style={{position:'absolute',zIndex:1,margin:0,padding:0,opacity:0.3,objectFit:'cover',overflow:'hidden'}} className="size1 img-blur" width={2000} height={1009} />
        <div style={{zIndex:10}}>
          <span />
            <div className="flex-col-c p-t-50 p-b-50">
            <h3 className="l1-txt1 txt-center p-b-10">
              Vocal Master Class Registration
            </h3>
            
            <div className='flex-w flex-c cd100 p-b-30 '>
              <img className="img-poster" src={poster} style={{width:'20%'}}/>
            </div>
            <div className="flex-w flex-c cd100 p-b-60">
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 days">35</span>
                <span className="s1-txt1">Days</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 hours">17</span>
                <span className="s1-txt1">Hours</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 minutes">50</span>
                <span className="s1-txt1">Minutes</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 seconds">39</span>
                <span className="s1-txt1">Seconds</span>
              </div>
            </div>
            <a  href="https://bit.ly/DaftarVocalMasterClass" style={{color:'white'}} className="txt-center p-b-10">
            <h3>bit.ly/DaftarVocalMasterClass</h3>
            </a>
            <h1 style={{color:'white'}}>or</h1>
            <br/>
            <button className="flex-c-m s1-txt2 size3 how-btn" onClick={()=>window.locattion='https://bit.ly/DaftarVocalMasterClass'}>
              Register Now
            </button>
          </div>
        </div>
      </div>
   </div>

  );
}

export default App;
