import React, { Fragment } from 'react'

function Lyrics({ lyrics }) {

    if(lyrics.length === 0) return null

    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{ lyrics }</p>
        </Fragment>
    )
}

export default Lyrics;