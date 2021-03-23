import Link from 'next/link'
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getCurrentUser } from './../../redux/actions/userActions';

function Navbar({ currentUser }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <div className='container'>
      <nav className="navbar">
        <Link href='/'>
          <a className="navbar-brand">
            <img src='/logo.png' alt='logo' />
          </a>
        </Link>
        <Link href='/'>
          <div className='navbar-user'>
            <div className='user-img img--md'>
              <img src={currentUser?.avatar} alt='profile' />
            </div>
            <a className='user-name'>{currentUser?.name}</a>
          </div>
        </Link>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.userRed.currentUser
})

export default connect(mapStateToProps)(Navbar)
