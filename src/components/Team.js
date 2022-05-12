export const Team = (props) => {
  return (
    <div>
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2 className="color-white">Founder</h2>
          <p>
          Veni Rawal is a TISS graduate with over 16 years of professional work experience across industries. He has completed several search assignments across Middle East, South Asia and India location with organizations of repute. He comes with a unique combination of Human Resource & Talent Acquisition experience spanning across multiple industries like Payment Business, Packaging, Industrial Technologies, Banking & Financial Services, BPO and IT Services.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
    </div>
  )
}
