import { Image } from "./images";

export const Podcasts = (props) => {
  return (
    <div id='podcasts' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Podcasts</h2>
        </div>
        <div className='row'>
          <div className='podcast-items'>
          {props.data
              ? props.data.map((d, i) => (
               
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                   <a href={d.alink} key={`${d.title}-${i}`}>
                  <Image title={d.title} smallImage={d.smallImage} />
                  </a>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}