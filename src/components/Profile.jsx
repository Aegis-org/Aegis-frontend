import { Link } from "react-router-dom"
import ProfileButton from "./ProfileButton"
import {HiOutlinePencil} from 'react-icons/hi'
import { RiFileSearchLine } from 'react-icons/ri'
import { IoWarningOutline } from 'react-icons/io5'
import { MdPhoneInTalk } from 'react-icons/md'
import { MdOutlineLogout } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

const Profile = ({user}) => {
    return (
        <div className="flex flex-col space-y-8">
            <Link to='/profile'>
                <ProfileButton text={'Edit profile'} icon={<HiOutlinePencil size="1.5rem" className="absolute left-8" />} />
            </Link>
            <ProfileButton text={'Resubmit Credentials'} icon={<RiFileSearchLine size="1.5rem" className="absolute left-8"/>} bgColor={'bg-pry-accent'}>
            </ProfileButton>
            <ProfileButton text={'Report a Buyer'} icon={<IoWarningOutline size="1.5rem" className="text-red-500 absolute left-8"/>} bgColor={'bg-pry-accent'}>
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

export default Profile
