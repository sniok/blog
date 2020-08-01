import React, { useEffect } from "react"

export function Ad() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    script.async = true

    document.body.appendChild(script)

    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4097504436325122"
      data-ad-slot="1100399223"
    />
  )
}
