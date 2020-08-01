import React from "react"

function CodeExample(props) {
  return (
    <div className="CodeExample" style={{ color: "red" }}>
      {props.children}
    </div>
  )
}

export default CodeExample
