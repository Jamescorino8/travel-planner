import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

L.Marker.prototype.options.icon = L.icon({ iconUrl, shadowUrl })

export default function TripMap({ events }) {
  return (
    <MapContainer
      center={[37.5665, 126.9780]}
      zoom={12}
      style={{ height: '100%', width: '100%', border: '1px solid black' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {events.map(event => {
        const baseOptions = event.isConfirmed
          ? { color: 'rgba(213, 0, 0, 0.65)', opacity: 0.65, fillColor: 'rgba(213, 0, 0, 0.65)', fillOpacity: 0.65, weight: 1}
          : { color: '#808080', opacity: 0.65, fillColor: '#808080', fillOpacity: 0.65, weight: 1 }
        return (
          <CircleMarker
            key={event.id}
            center={event.extendedProps.coords}
            radius={4}
            pathOptions={baseOptions}
            eventHandlers={{
              mouseover: e => { 
                const hoverColor = event.isConfirmed ? 'rgba(160, 0, 0, 0.85)' : '#4a4a4a'; 
                e.target.setRadius(8); 
                e.target.setStyle({ color: hoverColor, fillColor: hoverColor, opacity: 1, fillOpacity: 1, weight: 1}) },
              mouseout:  e => { 
                e.target.setRadius(4); 
                e.target.setStyle({ color: baseOptions.color, fillColor: baseOptions.fillColor, opacity: baseOptions.opacity, fillOpacity: baseOptions.fillOpacity, weight: baseOptions.weight }) },
              // click: e => {

              // }
            }}
          >
            <Tooltip>{event.title}</Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}