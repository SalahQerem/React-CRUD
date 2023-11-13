import React from 'react'

function Input({id, text, type, name, value, changeData, errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{text}</label>
        <input type={type} name={name} className="form-control" id={id} value={value} onChange={changeData}/>
        {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
  )
}

export default Input