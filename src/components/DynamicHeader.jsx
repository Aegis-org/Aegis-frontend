import React from 'react'
import Logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiMenu } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

//hook
import { useGetScreenBreakPoint } from '../hooks/useGetScreenBreakPoint'


const DynamicHeader = () => {
    const screen = useGetScreenBreakPoint();

    return (
        <div className="max-w-6xl mx-auto py-2 px-2 flex items-center">
            <FiMenu size="1.875rem" className=""/>
            <img src={Logo} alt="Aegis-logo" className="w-10 mx-4" />
            <div className="flex items-center ml-auto">
                <IoSettingsOutline size="1.875rem" className=" mr-4"/>
                <IoMdNotificationsOutline size="1.875rem" className=" mr-4"/>
                <div className="w-14 h-14 rounded-2xl border border-gray-600 rounded-full ">
                </div>
            </div>
        </div>
    )
}

export default DynamicHeader
