export const Funds = (props) => {
    return (
        <div id='funds' className='text-center'>
        <div className='container'>
          <div className='col-md-12 col-md-offset-1 section-title'>
            <h2>Our Funds</h2>
          </div>
          <div className='cards'>
            {props.data
              ? props.data.map((d, i) => (
                  <a href={d.link} key={`${d.title}-${i}`} className="text-card">
                    {' '}
                    <div className="text-section">
                   <img src={d.icon} alt=''/> 
                    <h4>{d.title}</h4>
                    <p>{d.text1}</p>
                    <p>{d.text2}</p>
                  </div>
                  </a>
                ))
              : 'Loading...'}
          </div>
          <div class="btn-section">
            <div class="col-xs-12 col-md-4 btn-more-info">
                <a href='https://www.fasanara.com/funds' class="button button-large">More about our Funds<span>  <svg class="icon--arrow-right icon-arrow" aria-hidden="true" viewBox="0 0 32 32">                
            <path d="M20 28l-2.8-2.8 7.1-7.2H0v-4h24.3l-7.1-7.2L20 4l12 12z"></path></svg></span></a>
            
            </div>
          </div>
         
        </div>
      </div>

    )

}