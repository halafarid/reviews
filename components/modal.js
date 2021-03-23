import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap'
import BeautyStars from 'beauty-stars';
import store from './../redux/store';
import FormInput from "./formInput";
import { addReview } from '../redux/actions/reviewActions';

export default function ModalOverlay({ show, setShow }) {
  const [rating, setRating] = useState(1)
  const dispatch = useDispatch()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { isValid } = formState

  const onSubmit = data => {
    setShow(false)
    const date = new Date()
    const today = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yyyy: date.getFullYear()
    };
    const currentUser = store.getState().userRed.currentUser
    const result = {...data, rating, user: currentUser, date: `${today.dd}-${today.mm}-${today.yyyy}`}
    dispatch(addReview(result))
  }

  useEffect(() => {
    setRating(1)
  }, [show])

  return (
    <Modal show={show} size='lg' centered onHide={() => setShow(false)}>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form_control'>
            <label>Rating</label>
            <BeautyStars
              value={rating}
              inactiveColor='#ddd'
              activeColor='#ffd600'
              size='20px'
              gap='5px'
              onChange={newValue => setRating(newValue)}
            />
          </div>
          <FormInput
            register={register}
            label='title'
            labelTxt='Review Title'
          />
          <FormInput
            register={register}
            label='details'
            labelTxt='Review Details'
            controlType='textarea'
          />
        </Modal.Body>
        <Modal.Footer>
          <button type='submit' className='btn--primary btn--sm' disabled={!isValid}>Add Review</button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
