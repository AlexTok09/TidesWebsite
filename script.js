// Initialisation de la carte (sans vue fixe)
const map = L.map('map');

// Style CSS personnalisé pour les popups
const style = document.createElement('style');
style.textContent = `
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.35) !important;
    backdrop-filter: blur(2px);
    border-radius: 8px !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2) !important;
  }
  .leaflet-popup-tip {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(2px);
  }
`;
document.head.appendChild(style);

// Fond de carte : Carto Positron
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> & OpenStreetMap contributors',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Icône pin grise semi-transparente en CSS (goutte retournée)
const greyCustomPin = L.divIcon({
  className: '',
  html: `<div style="
    width: 14px;
    height: 14px;
    background: rgba(136, 136, 136, 0.7); /* #888 avec 70% d'opacité */
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 0 1px rgba(0,0,0,0.4);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 14],
  popupAnchor: [0, -14]
});

// Tableau pour collecter les coordonnées des marqueurs
const markersCoords = [];

// Création des marqueurs et popups
oeuvres.forEach(oeuvre => {
  const popupContent = `
    <div style="max-width: 240px; min-height: 220px; font-family: Roboto, sans-serif;">
      <h3 style="margin-top:0; font-size: 14px;">${oeuvre.titre}</h3>
      <a href="${oeuvre.lien}" target="_blank">
        <img src="${oeuvre.image}" alt="${oeuvre.titre}" style="width:100%; max-height:160px; object-fit:cover; border-radius:8px; margin-top:8px;">
      </a>
    </div>
  `;

  const marker = L.marker([oeuvre.lat, oeuvre.lng], { icon: greyCustomPin }).addTo(map);
  marker.bindPopup(popupContent, {
    className: 'custom-popup' // Ajout d'une classe pour le popup
  });

  // Centrage automatique au clic
  marker.on('click', () => {
    map.panTo([oeuvre.lat, oeuvre.lng], {
      animate: true,
      duration: 0.5
    });
    marker.openPopup();
  });

  // Stocke la position pour fitBounds
  markersCoords.push([oeuvre.lat, oeuvre.lng]);
});

// Ajuste la vue à tous les marqueurs
map.fitBounds(markersCoords, {
  padding: [30, 30]
});