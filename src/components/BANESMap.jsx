import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const BANESMap = () => {
  // BANES boundary coordinates (approximate polygon)
  // This is a simplified boundary - for production, use official GeoJSON
  const banesBoundary = [
    [51.4500, -2.2800], // NE corner (near Marshfield)
    [51.4450, -2.3500], // North (Cold Ashton area)
    [51.4300, -2.4200], // NW (near Wick)
    [51.4100, -2.5000], // Keynsham area
    [51.3800, -2.5200], // West of Keynsham
    [51.3500, -2.5500], // Whitchurch area
    [51.3200, -2.5600], // Publow area
    [51.2900, -2.5400], // Clutton area
    [51.2700, -2.5200], // Paulton area
    [51.2500, -2.4800], // Midsomer Norton west
    [51.2400, -2.4400], // Radstock area
    [51.2300, -2.4000], // South of Radstock
    [51.2400, -2.3500], // Wellow area
    [51.2500, -2.3000], // Hinton Charterhouse
    [51.2700, -2.2800], // Freshford area
    [51.3000, -2.2500], // Limpley Stoke
    [51.3300, -2.2300], // Bathford area
    [51.3600, -2.2500], // Batheaston
    [51.3900, -2.2600], // St Catherine
    [51.4200, -2.2700], // North of Bath
    [51.4500, -2.2800], // Back to start
  ];

  // Area locations with coordinates
  const areas = [
    { name: 'Bath', lat: 51.3751, lng: -2.3617, businesses: '5,000+', slug: 'bath' },
    { name: 'Keynsham', lat: 51.4136, lng: -2.4978, businesses: '800+', slug: 'keynsham' },
    { name: 'Midsomer Norton', lat: 51.2847, lng: -2.4817, businesses: '500+', slug: 'midsomer-norton' },
    { name: 'Radstock', lat: 51.2929, lng: -2.4486, businesses: '250+', slug: 'radstock' },
    { name: 'Peasedown St John', lat: 51.3170, lng: -2.4270, businesses: '200+', slug: 'peasedown-st-john' },
    { name: 'Paulton', lat: 51.3040, lng: -2.5060, businesses: '180+', slug: 'paulton' },
    { name: 'Saltford', lat: 51.4020, lng: -2.4590, businesses: '150+', slug: 'saltford' },
    { name: 'Timsbury', lat: 51.3220, lng: -2.4780, businesses: '80+', slug: 'timsbury' },
  ];

  // Map center (roughly center of BANES)
  const center = [51.3472, -2.3900];

  return (
    <div className="relative">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
        className="rounded-lg z-0"
      >
        {/* Dark map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* BANES Boundary Polygon */}
        <Polygon
          positions={banesBoundary}
          pathOptions={{
            color: '#6366f1',
            weight: 3,
            fillColor: '#6366f1',
            fillOpacity: 0.15,
            dashArray: '10, 5',
          }}
        >
          <Tooltip sticky>
            <span className="font-semibold">Bath & North East Somerset</span>
          </Tooltip>
        </Polygon>

        {/* Area Markers */}
        {areas.map((area) => (
          <Marker
            key={area.slug}
            position={[area.lat, area.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center min-w-[120px]">
                <strong className="text-lg block mb-1">{area.name}</strong>
                <span className="text-gray-600 text-sm">{area.businesses} businesses</span>
                <a
                  href={`/areas/${area.slug}`}
                  className="block mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View area →
                </a>
              </div>
            </Popup>
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
              <span className="font-medium">{area.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-dark-card/95 backdrop-blur-sm border border-white/10 rounded-lg p-3 z-[1000]">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded border-2 border-primary bg-primary/20" />
          <span className="text-gray-300">BANES Boundary</span>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white" />
          <span className="text-gray-300">Service Areas</span>
        </div>
      </div>
    </div>
  );
};

export default BANESMap;
