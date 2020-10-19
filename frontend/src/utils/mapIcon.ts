import Leaflet from 'leaflet'
import mapMarkerImg from '../assets/mapMarker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, -8]
})

export default mapIcon
