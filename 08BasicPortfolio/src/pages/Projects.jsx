
const Projects = () => {
  return (
    <>
    <h2 className='center p-2'>My Projects</h2>
    <div className='flex'>
      <div className='p-2'>
        <h3>Facebook</h3>
        <div><img src="https://bit.ly/3Ai9Wdq" alt="Facebook" className="img-responsive"/></div>
        <p>A social network to stay in touch with friends.</p>
      </div>
      <div className='p-2'>
        <h3>Twitter (now X)</h3>
        <div><img src="https://bit.ly/3ajBt3v" alt="Twitter" className="img-responsive"/></div>
        <p>Post an update or tweet sharing news, facts, or anything else.</p>
      </div>
      <div className='p-2'>
        <h3>Quora</h3>
        <div><img src="https://bit.ly/3Ai9Xhu" alt="Quora" className="img-responsive"/></div>
        <p>Ask Questions, or Answer questions asked by others.</p>
      </div>
    </div>
  </>
  )
}

export default Projects