import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Collapse } from 'react-bootstrap';
import BeautyStars from 'beauty-stars';
import FormInput from '../formInput';
import CommentCard from './commentCard';
import { addComment } from './../../redux/actions/reviewActions';

export default function ReviewCard({ review }) {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    setShow(false)
    dispatch(addComment(review.id, data.comment))
  }

  return (
    <div className='card'>
      <div className='user_logo img--lg'>
        <img src={review?.user?.avatar} alt='profile' />
      </div>
      <div className='card_content'>
        <div className='card_details'>
          <h2 className='card_details-username'>{review?.user?.name}</h2>
          <p className='card_details-date'>{review?.date}</p>
          <h3 className='card_details-title'>{review?.title}</h3>
          <div className='card_details-rating'>
            <i className={`fas fa-2x ${review?.rating > 3 ? 'fa-thumbs-up like' : 'fa-thumbs-down dislike'}`}></i>
            <div>
              <BeautyStars
                value={review?.rating}
                inactiveColor='#ddd'
                activeColor='#ffd600'
                size='20px'
                gap='5px'
                editable={false}
              />
              <p>
                <span>{review?.rating}</span>/5
              </p>
            </div>
          </div>
        </div>
        <div className='card_review'>{review?.details}</div>

        {review?.comment && <CommentCard comment={review?.comment} />}

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Collapse in={show}>
            <div id="showComment">
              <FormInput
                register={register}
                label='comment'
                labelTxt='Your Comment'
                controlType='textarea'
                rows='5'
                req={show ? true : false}
              />
            </div>
          </Collapse>
          {!review?.comment && <div className='btn_bx'>
            <button
            onClick={() => setShow(true)}
            className='btn--primary'
            aria-controls="showComment"
            aria-expanded={show}
            >
              Add Comment
            </button>
          </div>}
        </form>
      </div>
    </div>
  )
}