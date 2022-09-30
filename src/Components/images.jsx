export const Image = ({ title, smallImage, alink }) => {
    return (
      <div className='podcast-item'>
        <div className='hover-bg'>
          {' '}
          <a
            href={alink}
            title={title}
          >
            <div className='hover-text'>
              <h4>{title}</h4>
            </div>
            <img
              src={smallImage}
              className='img-responsive'
              alt={title}
            />{' '}
          </a>{' '}
        </div>
      </div>
    )
  }