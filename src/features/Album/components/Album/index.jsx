import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

// Album.PropTypes ={
//     album: PropTypes.array,
// };
// Album.defaultPorps ={
//     album: [],
// };

function Album({album}){
    return(
        <>
            <li className='item'>
                <img className='item__img' src={album.thumbnail} alt="thumbnail" />
                <h3 className='item__title'>{album.name}</h3>
            </li>
        </>
    )
}

export default Album;