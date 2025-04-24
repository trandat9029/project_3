import PropTypes from 'prop-types'
import { Outlet} from 'react-router-dom';



TodoFeatures.PropTypes ={

};

function TodoFeatures(){
    

    return(
        <>
            <h2>Todo Feature</h2>
            {/* Đây là nơi hiện ListPage hoặc DetailPage tùy theo route con */}
            <Outlet />

        </>
    )
}

export default TodoFeatures;