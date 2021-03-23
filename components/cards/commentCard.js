export default function CommentCard({ comment }) {
  return (
    <div className='card_comment'>
      <div className='triangle'></div>
      <p>{comment}</p>
      <div className='img--md'>
        <img src='/profile-pic.png' alt='profile' />
      </div>
    </div>
  )
}