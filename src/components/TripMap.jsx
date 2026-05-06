import { useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

L.Marker.prototype.options.icon = L.icon({ iconUrl, shadowUrl })

export default function TripMap({ events, toggleEvent, highlightedId }) {
  const markerRefs = useRef({})
  useEffect(() => { // make while list item is selected
    Object.values(markerRefs.current).forEach(({ marker, baseOptions, hoverOptions }) => {
      if (marker) {
        marker.setRadius(8)
        marker.setStyle({ color: baseOptions.color, fillColor: baseOptions.fillColor, opacity: baseOptions.opacity, fillOpacity: baseOptions.fillOpacity, weight: baseOptions.weight })
        marker.closeTooltip()
      }
    })
    if (!highlightedId) return
    const { marker, hoverOptions } = markerRefs.current[highlightedId]
    if (marker) {
      marker.setRadius(10)
      marker.setStyle({ color: hoverOptions.color, fillColor: hoverOptions.fillColor, opacity: hoverOptions.opacity, fillOpacity: hoverOptions.fillOpacity, weight: hoverOptions.weight })
      marker.openTooltip()
    }
    }, [highlightedId])

  return (
    <MapContainer
      center={[37.5665, 126.9780]} // Seoul, South Korea
      zoom={12}
      style={{ height: '100%', width: '100%', border: '1px solid black' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {events.map(event => {
        const baseOptions = event.isConfirmed
          ? { color: 'rgba(213, 0, 0, 0.65)', opacity: 0.65, fillColor: 'rgba(213, 0, 0, 0.65)', fillOpacity: 0.65, weight: 1}
          : { color: 'rgba(132, 132, 132, 0.488)', opacity: 0.85, fillColor: 'rgba(132, 132, 132, 0.488)', fillOpacity: 0.85, weight: 1 }
        const hoverOptions = event.isConfirmed
          ? { color: 'rgba(160, 0, 0, 0.85)', opacity: 1, fillColor: 'rgba(160, 0, 0, 0.85)', fillOpacity: 1, weight: 1}
          : { color: 'rgba(71, 71, 71, 0.49)', opacity: 1, fillColor: 'rgba(71, 71, 71, 0.49)', fillOpacity: 1, weight: 1 }
          return (
          <CircleMarker
            key={event.id}
            ref={el => { if (el) markerRefs.current[event.id] = { marker: el, baseOptions, hoverOptions } }}
            center={event.extendedProps.coords}
            radius={8}
            pathOptions={baseOptions}
            eventHandlers={{
              mouseover: e => { 
                e.target.setRadius(10); 
                e.target.setStyle({ color: hoverOptions.color, fillColor: hoverOptions.fillColor, opacity: hoverOptions.opacity, fillOpacity: hoverOptions.fillOpacity, weight: hoverOptions.weight }) 
              },
              mouseout:  e => { 
                e.target.setRadius(8); 
                e.target.setStyle({ color: baseOptions.color, fillColor: baseOptions.fillColor, opacity: baseOptions.opacity, fillOpacity: baseOptions.fillOpacity, weight: baseOptions.weight }) 
              },
              click: e => {
                toggleEvent(event.id)
              },
            }}
          >
            <Tooltip>{event.title}</Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}