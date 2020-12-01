import React, { useEffect, useState } from 'react';
import './OrphanagesMap.css';

import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


import mapIcon from '../components/utils/mapIcon';
import mapMarkerImg from './assets/mapmarker.svg';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  // useEffect(() => {}, []); // a leitura é: eu quero que execute a arrowFunction quando algum valor do vetor modificar
  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);


  return (
    <div id="page-map">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>

        <footer>
          <strong>São José</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      
      {/** Configuração para utilizar mapas com React */}
      {/** LeafLet */}
      {/** React-LeafLet */}
      {/** TileLayer */}
      {/** OpenStreetMap || MapBox */}
      <Map center={[-27.5985206, -48.6141232]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/** OpenStreetMap */}  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/**  MapBox */} {/* <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} /> */}

        {orphanages.map(orphanage => {
          return (
            <Marker icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} key={orphanage.id}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>



      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;
