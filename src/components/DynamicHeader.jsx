import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { BsSearch } from "react-icons/bs";
import SearchBar from './SearchBar'

// header for root route i.e '/home'
import NavBar from './NavBar'
import Header from './Header/Header'

// menu list items
import MenuLinks from './MenuLinks'

//hook
import { useGetScreenBreakPoint } from '../hooks/useGetScreenBreakPoint'

const DynamicHeader = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [underSearch, setUnderSearch] = useState(false)
    const [menuVisibility, setMenuVisibility] = useState(false)
    const [dashboardSearchVis, setDashboardSearchVis] = useState(false)

    const location = useLocation().pathname
    const screen = useGetScreenBreakPoint();
    
    useEffect(() => {
       
        function showBigNav(location, screen) {
            if (location.includes('dashboard')) {
                if (screen != ('sm')) {
                    setDashboardSearchVis(true)
                }
                else {
                    setDashboardSearchVis(false)
                }
            }
            else {
                setDashboardSearchVis(false)
            }
        }

        showBigNav(location, screen)
    }, [screen])
    
    console.log({screen, dashboardSearchVis, underSearch})

    if (location == '/' || location == '/home') {
        return (
            <>
                <Header/>
                <NavBar/>
            </>
        )
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="py-2 px-2 flex flex-wrap gap-y-3 gap-x-8 lg:gap-x-32 sm:flex-nowrap items-center justify-between">
                <div className="flex gap-x-4 items-center flex-shrink-0">
                    <FiMenu size="1.875rem" onClick={() => setMenuVisibility(prev => !prev)} className="cursor-pointer text-pry-clr" />
                    <Link to='/'>
                        <img src={Logo} alt="Aegis-logo" className="w-10" />
                    </Link>
                </div>
                {dashboardSearchVis && <SearchBar query={searchTerm} setQuery={setSearchTerm} />}
                {(screen == 'sm' && underSearch) ? <SearchBar query={searchTerm} setQuery={setSearchTerm} /> : null}
                <div className="flex items-center gap-x-4">
                    <BsSearch size="1.75rem" onClick={() => setUnderSearch(prev => !prev)} className="sm:hidden cursor-pointer text-pry-clr"/>
                    <IoSettingsOutline size="1.875rem" className="cursor-pointer text-pry-clr"/>
                    <IoMdNotificationsOutline size="1.875rem" className="cursor-pointer text-pry-clr"/>
                    <div className={`w-14 h-14 border border-gray-600 rounded-full bg-bluee-200 ${dashboardSearchVis && 'hidden'}`}>
                    </div>
                </div>
            </div>
            <MenuLinks visibility={menuVisibility}/>
        </div>
    )
}

// function SearchBarLg ({query, setQuery}) {
//     return (
//         <SearchBar query={query} setQuery={setQuery} />
//     )
// }

export default DynamicHeader
