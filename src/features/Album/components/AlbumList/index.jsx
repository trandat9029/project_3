import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'
import Album from '../Album'

AlbumList.PropTypes ={
    albumList: PropTypes.array,
};
AlbumList.defaultPorps ={
    albumList: [],
};

function AlbumList({albumList}){
    // const {todoList} = props;
    return(
        <>
            <ul>
                {albumList.map((album) =>(
                    <Album key={album.id} album={album}></Album>
                ))}
            </ul>
        </>
    )
}

export default AlbumList;