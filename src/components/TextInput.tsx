import React from 'react'

interface TextInpuProps {
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: () => void,
  error: string | null,
  type?: string
}

const TextInput: React.FC<TextInpuProps> = ({label, value, onChange, onBlur, error, type = 'text'}) => {
  return (
    <div className="input_container">
      <input value={value} onBlur={onBlur} onChange={onChange} type={type} className="input_field" />
      {error && <b className='registration__error'>{error}</b>}
    </div>
  )
}

export default TextInput
