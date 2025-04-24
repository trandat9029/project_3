import img1 from '../../assets/img/co-em.jpg'
import img2 from '../../assets/img/co-trang-chai-viet-len-cay.jpg'
import img3 from '../../assets/img/unravel.jpg'
import PropTypes from 'prop-types'
import React from 'react'

import AlbumList from './components/AlbumList'

AlbumFeatures.PropTypes ={

};

function AlbumFeatures(){
    const albumlist =[
        {
            id : 1,
            name: 'Co em',
            thumbnail : img1,
        },
        {
            id : 2,
            name: 'Co chang trai viet len cay',
            thumbnail : img2,
        },
        {
            id : 3,
            name: 'unravel',
            thumbnail : img3,
        },
    ]
    return(
        <>
            <AlbumList albumList={albumlist}/>
                      <div className="bg-red-500 text-white px-4 py-2 rounded ">j vay</div>

        </>
    )
}

export default AlbumFeatures;