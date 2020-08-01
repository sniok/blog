import React from "react"
import { useMap } from "./mapbox"

function GeojsonCircles(props) {
  // Getting map from context
  const map = useMap()

  // Defining data source and layer
  React.useEffect(() => {
    map.addSource("circle-source", {
      type: "geojson",
      // By default we're using just an empty geojson
      data: {
        type: "FeatureCollection",
        features: [],
      },
    })
    map.addLayer({
      id: "circle-layer",
      type: "circle",
      source: "circle-source",
      paint: {
        "circle-color": "red",
      },
    })

    return () => {
      map.removeLayer("circle-layer")
      map.removeSource("circle-source")
    }
  }, [])

  // Updating data
  React.useEffect(() => {
    map.getSource("circle-source").setData(props.geojson)
  }, [props.geojson])

  return null
}

export default GeojsonCircles
