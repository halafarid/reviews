export default function FormInput({ register, label, labelTxt, controlType, rows, req }) {
  return (
    <div className='form_control'>
      <label htmlFor={label}>{labelTxt}</label>
      {controlType === 'textarea' ? (
        <textarea
          rows={rows ? rows : '3'}
          id={label}
          name={label}
          ref={register(req === false ? { required: false } : { required: true })}></textarea>
      ) : (
        <input
          type='text'
          id={label}
          name={label}
          autoComplete='off'
          ref={register({ required: true })}
        />
      )}
    </div>
  )
}
