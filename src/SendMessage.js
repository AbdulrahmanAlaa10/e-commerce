import React, { Fragment } from 'react';
import * as emailjs from "emailjs-com";

export default function SendMessage() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ydbhfkm', 'template_nvi7wku', e.target, 'user_ij3kwOIkZW04EkmSokTrN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

      return (
          <div> 
              <div className="container">
                  <h1 style={{textAlign:"center"}}>Send Me Message if You Need Something</h1>
                  <form onSubmit={sendEmail}>
                      <div className="row pt-5 mx-auto">
                          <div className="col-8 form-group mx-auto">
                              <input type="text" className="backk form-control" placeholder="Name" name="name" />
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                              <input type="email" className="backk form-control" placeholder="Email Address" name="email" />
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="backk form-control" placeholder="00x xxxxxxxxxxx" name="phone" />

                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="backk form-control" placeholder="country" name="country" />

                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="backk form-control" placeholder="subject" name="subject" />

                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                          </div>
                          <div className="col-8 pt-3 mx-auto">
                              <input type="submit" className="btn btn-info btn-block" style={{marginBottom:"20px"}} name="Send Message"></input>
                          </div>
                      </div>
                  </form>
              </div>
          </div>

    );
}
