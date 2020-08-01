import React from "react"

function LanguageTag(props) {
  return (
    <div
      style={{
        padding: "5px 20px 20px 20px",
        background: props.background,
        color: "#FFF",
        marginBottom: "-19px",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "7px",
      }}
    >
      {props.name}
    </div>
  )
}

export const ReasonTag = ({ label = "ReasonML" }) => (
  <LanguageTag name={label} background={"#dd4b39"} />
)
export const TsTag = ({ label = "TypeScript" }) => (
  <LanguageTag name={label} background={"#71a0e0"} />
)
