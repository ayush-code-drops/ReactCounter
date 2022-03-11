import React from 'react'

function Button({ title, onClick }) {
  let styles = {
    backgroundColor: "black",
    color: "white",
    margin:"5px"
  }
  return (
      <button style={styles}  onClick={onClick}>{title}</button>
  )
}

export default Button