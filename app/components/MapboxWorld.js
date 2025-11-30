"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_TOKEN, defaultMapSettings } from "../../lib/mapboxConfig";

export default function MapboxWorld() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: defaultMapSettings.center,
      zoom: defaultMapSettings.zoom,
      pitch: defaultMapSettings.pitch,
      bearing: defaultMapSettings.bearing,
      antialias: true,
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
}

