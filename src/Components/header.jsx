import { Navigation } from "./navigation";

export const Header = (props) => {
    return (
      <header id='header'>
        <div className='intro'> 
        
          <div className='overlay'>
          <Navigation />
            <div className='container'>
              <div className='row'>

                <div className='col-md-12 col-md-offset-2 intro-text'>
                <span>{props.data ? props.data.title : 'Loading'}</span>
                    <h2>{props.data ? props.data.brand : 'Loading'}</h2>
                   
                    <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }