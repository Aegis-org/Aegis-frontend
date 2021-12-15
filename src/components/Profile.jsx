import { Link } from "react-router-dom"
import ProfileButton from "./ProfileButton"
import {HiOutlinePencil} from 'react-icons/hi'
import { IoCarSportSharp } from 'react-icons/io5'
import { IoWarningOutline } from 'react-icons/io5'
import { MdPhoneInTalk } from 'react-icons/md'
import { MdOutlineLogout } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

// passing dummy user data
// if the profile component is being used in a route other than dashboard, then don't pass the dashboard prop
// the default prop means by default it is report a seller, only in the seller dahboard is it report a buyer

const Profile = ({user, dashboard}) => {
    return (
        <div className="flex flex-col space-y-8">
            <Link to='/profile'>
                <ProfileButton text={'Edit profile'} icon={<HiOutlinePencil size="1.5rem" className="absolute left-8" />} />
            </Link>
            { user.type === 'seller' && <ProfileButton text={'My Vehicles'} icon={<IoCarSportSharp size="1.5rem" className="absolute left-8"/>} bgColor={'bg-pry-accent'}>
            </ProfileButton>}
            <ProfileButton text={`Report a ${dashboard === 'seller'? 'Buyer' : 'Seller'}`} icon={<IoWarningOutline size="1.5rem" className="text-red-500 absolute left-8"/>} bgColor={'bg-pry-accent'}>
            </ProfileButton>
            <ProfileButton text={'Help Center'} icon={<MdPhoneInTalk size="1.5rem" className="absolute left-8"/>} bgColor={'bg-pry-accent'}>
            </ProfileButton>
            <ProfileButton text={'Logout'} icon={<MdOutlineLogout size="1.5rem" className="absolute left-8"/>} bgColor={'bg-pry-accent'}>
            </ProfileButton>
            <ProfileButton text={'Delete Account'} icon={<MdDelete size="1.5rem" className="absolute left-8"/>} bgColor={'bg-red-500'} textColor='text-white'>
            </ProfileButton>
        </div>
    )
}

Profile.defaultProps = {
    dashboard: 'buyer'
}

export default Profile
