import React from 'react';
import MapComponent from './MapComponent';

export default function ListingMap({ locations = [] }) {
  return (
    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden border border-border shadow-sm">
      <MapComponent locations={locations} />
    </div>
  );
}
