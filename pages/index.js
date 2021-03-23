import Head from 'next/head'
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import ModalOverlay from '../components/modal'
import ReviewCard from '../components/cards/reviewCard'
import { getReviews } from '../redux/actions/reviewActions';

function Home({ reviews }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviews())
  }, [])

  return (
    <div>
      <Head>
        <title>Reviews Page</title>
      </Head>

      <ModalOverlay show={show} setShow={setShow} />
      
      <header className='header'>
        <div className='overlay'></div>
        <div className='header_content'>
          <h1 className='header_content-title'>What Our Users Say About Shahry ?</h1>
          <button className='btn--light' onClick={() => setShow(true)}>Add a review</button>
        </div>
      </header>

      <div className='container'>
        {reviews?.map(review =>
          <ReviewCard key={review.id} review={review} />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  reviews: state.reviewRed.reviews,
})

export default connect(mapStateToProps)(Home)
