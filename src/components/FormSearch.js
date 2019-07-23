import React, { useState } from 'react';

function Form({ queryApiLyrics }) {
    // Funcion para actualizar el state de los inputs
    const [search, addSearch ] = useState({
        artist: '',
        title: ''
    })

    const handleState = e => {
        addSearch({
           ...search, 
           [e.target.name] : e.target.value
        })
    }
    

    // Cuando hacemos submit al form se envia al componente principal (App.js)
    const handleSubmit = e => {
        e.preventDefault();

        queryApiLyrics(search);
    }

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Nombre Artista" 
                                        onChange={handleState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="title" 
                                        placeholder="Nombre Canción" 
                                        onChange={handleState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>   
    )
} 

export default Form; 