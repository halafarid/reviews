import Head from 'next/head'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Header from './../components/core/header'
import ModalOverlay from '../components/modalOverlay'
import ReviewCard from '../components/cards/reviewCard'
import { getReviews } from '../redux/actions/reviewActions'

function Home({ reviews }) {
  const [show, setShow] = useState(false)
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

      <Header setShow={setShow}></Header>

      <div className='container'>
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  reviews: state.reviewRed.reviews,
})

export default connect(mapStateToProps)(Home)
