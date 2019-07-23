import React, { useState, useEffect, Fragment } from 'react';
import FormSearch from './components/FormSearch'
import Lyrics from './components/Lyrics'
import Info from './components/Info'
import axios from 'axios'

function App() {

  // utlizar 3 states con 3 strates diferentes 
  const [artist, addArtist] = useState('');
  const [lyrics, addLyrics] = useState([]);
  const [info, addInfo] = useState({});  

  //Método para consultar la API de letras de canciones

  const queryApiLyrics = async (search) => {  
    const { artist, title } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    
    // Consulta a la api
    const result = await axios(url);

    // Almacenar el artista que se buscó
    addArtist(artist)
    
    // Almacenar letra en el estate 
    addLyrics(result.data.lyrics);
  }

  // Método para consultar la API de informacion extra
  const queryApiInfo = async () => {
    if(artist){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const result = await axios(url)
      
      addInfo(result.data.artists[0]);
  
      console.log(info);
    }
  }

  // useEffect es similar al componentDidMount y componentDidUpdate 
  useEffect(
    () => {
      queryApiInfo()
    },[artist]
  )

  return(
    <Fragment>
        <FormSearch
          queryApiLyrics={queryApiLyrics}
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info 
                info={Info}
              />
            </div>
            <div className="col-md-6">
              <Lyrics
                lyrics={lyrics}
              />
            </div>
          </div>
        </div>

    </Fragment>
  )
}

export default App;