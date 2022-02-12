import React from 'react'
import Header from './Header'
import Routers from './Routes'
import {HashRouter, Router} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routers/>

            </HashRouter>
        </div>
    )
}

export default HW5
