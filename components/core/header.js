export default function Header({ setShow }) {
  return (
    <header className='header'>
      <div className='overlay'></div>
      <div className='header_content'>
        <h1 className='header_content-title'>What Our Users Say About Shahry ?</h1>
        <button className='btn--light' onClick={() => setShow(true)}>
          Add a review
        </button>
      </div>
    </header>
  )
}
