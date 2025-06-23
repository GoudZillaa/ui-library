import React from 'react'

const input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  className = '',
  label,
  error,
  onFocus,
  onBlur,
  autoFocus = false,
  maxLength,
  pattern,
  readOnly = false,
  icon,
  variant,
}) => {
  console.log(typeof(icon))
  return (
    <div className={`input-wrapper w-full h-full ${className}`}>
      {/* {label && <label className='px-3' htmlFor={id || name}>{label}</label>} */}
        {/* {icon && <span className="input-icon">{icon}</span>} */}

      <div className="input-container relative w-full h-full">
        {
          icon&& <div className='absolute inset-y-0 left-0 flex justify-center align-center bg-[#f0f0f0] px-2 py-2 '><img className='w-8 h-8' src={icon}/></div>
        }
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          maxLength={maxLength}
          pattern={pattern}
          readOnly={readOnly}
          className="input-field bg-white w-full px-2 pl-10 h-full overflow-hidden rounded-xl border-solid border-black border-2"
        />
      </div>

      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default input
