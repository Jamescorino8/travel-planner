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
      {events.map(event => (
        <CircleMarker
          center={event.extendedProps.coords}
          radius={8}
          pathOptions={
            event.isConfirmed
              ? { color: '#E24B4A', opacity: 0.85, fillColor: '#E24B4A', fillOpacity: 0.85 }
              : { color: '#808080', opacity: 0.65, fillColor: '#808080', fillOpacity: 0.65 }
          }
        >
          <Tooltip>{event.title}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}