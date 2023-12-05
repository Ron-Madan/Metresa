import React from 'react'

const Button = ({ url, text, myFunc, styles }) => {
  return (
    <a href={`${url}`}>
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    onClick={myFunc}
    >
      {text}
    </button>
    </a>
  )
}

export default Button