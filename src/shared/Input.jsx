import React from 'react'

function Input({id, name, type, changeData, title, value, errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input type={type} name={name} className="form-control" id={id} value={value} onChange={changeData} />
        {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
  )
}

export default Input