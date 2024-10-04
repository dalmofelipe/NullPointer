import { Outlet } from 'react-router-dom'

import NavBar from '../../components/NavBar'

import './styles.css'


const DefaultLayout = () => {

    return (
        <div className="default-layout">

            <NavBar />

            <Outlet />
        
        </div>
    )

}


export default DefaultLayout