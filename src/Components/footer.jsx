export const Footer = () => {
    return (
      <div>
        <div id='footer'>
          <div className="footer-columns">
              <div className="footer-col">
                <div className="footer-col-title">Contact Us</div>
                <p className="mb-0"> <i class="fa fa-map-marker"></i>40 New Bond Street, London W1S 2RX</p>
                <p  className="mb-0">Tel: 0203-430-2482</p>
                <p  className="mb-0">Email: investors@fasanara.com</p>
                
              </div>
              <div className="footer-col">
                <ul className="footer-items">
                <div className="footer-col-title">Other Details</div>
                  <li><a href='https://www.fasanara.com/disclaimer'>Disclaimer</a></li>
                  <li><a href='https://storage.googleapis.com/wzukusers/user-17563510/documents/5b07f6b4651b6kldBobF/Privacy%20Policy.pdf'>Privacy policy</a></li>
                  <li><a href='https://storage.googleapis.com/wzukusers/user-17563510/documents/5b06b6f6630c6TiPobRZ/Internet%20Browsing%20and%20Cookies%20Policy.pdf'>Browsing and Cookies</a></li>
                  <li><a href='https://www.fasanara.com/esg'>ESG</a></li>
                </ul>
              </div>

              <div className="footer-col">
              <div className="footer-col-title">Fasanara Gazette</div>
              <div className="input-group">
                <label for="Email" className="newsletter__label label--hidden"></label>
                <input type="email" id="email-address-footer" name="email-address" className="validate-email " placeholder="Your email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"/>
                <span className="input-group__btn">
                    <button type="submit" className="btn newsletter__submit" name="subscribe" id="Subscribe">
                      <span className="newsletter__submit-text--large">Subscribe</span>
                    </button>
                </span>
             </div>
             <div className="contact-icon mt-10">
                  <a href="https://www.linkedin.com/company/fasanara-capital/"><img alt=""src="https://static.wixstatic.com/media/fcfebdfae12a44f993a94aeed8e2e66b.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fcfebdfae12a44f993a94aeed8e2e66b.png" /></a>
                  <a href="https://twitter.com/FasanaraCapital"><img alt="Twitter" src="https://static.wixstatic.com/media/aeb686ff41244d85bc1232fcf7325ec0.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aeb686ff41244d85bc1232fcf7325ec0.png"/></a>
             </div>
              </div>
              <div className="footer-col">
              <div className="footer-col-title"></div>
              <div className="bcFloat">
                  <div>
                    <a href='#a'>
                      <img id="0.07640001358901083" border="0" alt="Start Digital Assistant" src="https://s3.amazonaws.com/ps.projects/dyson/images/BoldChat-60x60-v1.png"/>
                    </a>
                  </div>
               </div>
              </div>
          </div>
       
        </div>
        <footer>
          <span>© Fasanara Capital Ltd 2020</span>
        
        </footer>
      </div>
     
    )
  }