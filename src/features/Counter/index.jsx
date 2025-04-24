import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';



CounterFeature.propTypes = {

};

function CounterFeature(){
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncreaseClick = ()=>{
        const action = increase(123); //action creator
        console.log(action);
        dispatch(action);
    }
    const handleDecreaseClick = () =>{
        // const action  = decrease(123);
        // console.log(action);
        dispatch(decrease(456));
    }


    return(
        <>
            <div>
                Counter Feature {count}
            </div>

            <div>
                <button onClick={handleIncreaseClick} >Increase</button>
                <button onClick={handleDecreaseClick}  >Decrease</button>
            </div>
        </>
    )
}

export default CounterFeature;