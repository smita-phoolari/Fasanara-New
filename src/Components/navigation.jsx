export const Navigation = () => {
  return (
    <>
   <nav id="menu"className="navbar navbar-expand-lg navbar-default">
  <div className="container-fluid">
  <a className='navbar-brand page-scroll' href='#page-top'>
          <img src="https://static.wixstatic.com/media/2bcfa3_da68a6686eaf4865a6a35798dcf9cfdb~mv2.png/v1/crop/x_0,y_143,w_1191,h_721/fill/w_318,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201_2x.png" alt="Fasanara"></img>
    </a>{' '}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
        <svg viewBox="0 0 30 18" fill="white" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="2"></rect>
          <rect y="8" width="30" height="2"></rect>
          <rect y="16" width="30" height="2"></rect>
        </svg></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a href='#funds' target="_self" className="nav-link dropdown-toggle page-scroll" data-bs-toggle="dropdown" aria-expanded="false">
                    Funds
                    <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path>
                    </svg>
          </a>
          <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://www.fasanara.com/esg">ESG</a></li>
          
          </ul>
        </li>
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle page-scroll" href='#insights' target="_self" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Insights
                  <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path>
                    </svg>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://www.fasanara.com/intelligence">Intelligence</a></li>
                  <li><a className="dropdown-item" href="https://www.fasanara.com/blogvc">VC Blog</a></li>
                </ul>
        </li>
        <li className="nav-item">
          <a href='#podcasts' className='page-scroll'>Podcasts</a>
        </li>
        <li className="nav-item">
           <a href='https://www.fasanara.com/media' className='page-scroll'> Media</a>
        </li>
      
        <li className="nav-item">
        <a href='https://www.fasanara.com/seed' className='page-scroll'> Seed</a>
        </li>
       
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle page-scroll" href='#info' target="_self" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Info
                  <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path>
                    </svg>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://www.fasanara.com/team">Team</a></li>
                  <li><a className="dropdown-item" href="https://www.fasanara.com/timeline">Timeline</a></li>
                  <li><a className="dropdown-item" href="https://www.fasanara.com/career">Careers</a></li>
                  <li><a className="dropdown-item" href="https://www.fasanara.com/contact">Contact</a></li>
                </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}