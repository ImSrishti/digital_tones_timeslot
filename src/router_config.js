
import { Routes, Route ,BrowserRouter as Router} from "react-router-dom";
import EditDetails from './edit_details';
import App from './App'

import React from 'react'

const Router_config = () => {
    return (
        <Router> {/*switch is replaced and instead of children ele*/}
        <Routes>
            <Route path="/" exact element={<App />}></Route>
            <Route path="/edit" element={<EditDetails />}></Route>
        </Routes>
        </Router>
    )
}

export default Router_config

