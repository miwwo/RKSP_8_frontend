import React from 'react'
import {Link} from "react-router-dom";

function NoPermission() {
    return (
        <>
            <div> <h1>Извините, у вас нет прав доступа к панели администрации </h1></div>
            <Link to="/"><h1>На главную страницу</h1></Link>
         </>
    )
}

export default NoPermission
