import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent({ locations = [] }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layerGroupRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const container = mapContainerRef.current;
    if (container._leaflet_id != null) {
      container._leaflet_id = null;
    }

    if (!mapInstanceRef.current) {
      const map = L.map(container, {
        center: [28.6139, 77.209], // Default Delhi
        zoom: 11,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        layerGroupRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    if (locations.length > 0) {
      locations.forEach((loc) => {
        if (loc.lat && loc.lng) {
          const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon });
          if (loc.name) {
            marker.bindPopup(`<div style="font-weight:600; font-size:13px; color:#111;">${loc.name}</div>`);
          }
          marker.addTo(layerGroup);
        }
      });

      if (locations.length > 1) {
        const validLocs = locations.filter((loc) => loc.lat && loc.lng);
        if (validLocs.length > 0) {
          const bounds = L.latLngBounds(validLocs.map((loc) => [loc.lat, loc.lng]));
          map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
        }
      } else if (locations[0]?.lat && locations[0]?.lng) {
        map.setView([locations[0].lat, locations[0].lng], 15);
      }
    } else {
      map.setView([28.6139, 77.209], 11);
    }
  }, [locations]);

  return <div ref={mapContainerRef} className="w-full h-full min-h-[300px] rounded-lg z-0" />;
}
