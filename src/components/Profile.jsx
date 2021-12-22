import ProfileButton from "./ProfileButton";
import { HiOutlinePencil } from "react-icons/hi";
import { IoCarSportSharp } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../utils/GlobalContextProvider";
// import EditProfile from "./EditProfile";

// passing dummy user data. If there's a global user object from useContext, pass that instead
// if the profile component is being used in a route other than dashboard, then don't pass the dashboard prop
// the default prop means by default it is report a seller, only in the seller dahboard is it report a buyer

const Profile = ({ setSellerModal }) => {
  const user = useContext(GlobalContext);
  // const [editProfile, setEditProfile] = useState(false);

  const userType = useRef(null);
  userType.current = user.userInfo.isSeller ? "seller" : "buyer";

  console.log({ userType });

  // let userType = 'buyer';
  useEffect(() => {
    if (user.userInfo.isSeller === true) {
      userType.current = "seller";
    }
  }, [user.userInfo.isSeller]);

  return (
    <div className="flex flex-col space-y-8">
      <ProfileButton
        text={"Edit profile"}
        border={"border-2 border-gray-300"}
        icon={<HiOutlinePencil size="1.5rem" className="absolute left-8" />}
        // onClick={() => setEditProfile(!editProfile)}
      />

      {/* {editProfile && <EditProfile />} */}
      {userType.current === "seller" && (
        <ProfileButton
          text={"My Vehicles"}
          icon={<IoCarSportSharp size="1.5rem" className="absolute left-8" />}
          bgColor={"bg-pry-accent"}
        ></ProfileButton>
      )}
      <ProfileButton
        text={`Report a ${userType.current === "seller" ? "buyer" : "seller"}`}
        icon={
          <IoWarningOutline
            size="1.5rem"
            className="text-red-500 absolute left-8"
          />
        }
        bgColor={"bg-pry-accent"}
      ></ProfileButton>
      <ProfileButton
        text={"Help Center"}
        icon={<MdPhoneInTalk size="1.5rem" className="absolute left-8" />}
        bgColor={"bg-pry-accent"}
      ></ProfileButton>
      <ProfileButton
        text={"Logout"}
        icon={<MdOutlineLogout size="1.5rem" className="absolute left-8" />}
        bgColor={"bg-pry-accent"}
        onClick={user.onLogout}
      ></ProfileButton>
      <ProfileButton
        text={"Delete Account"}
        icon={<MdDelete size="1.5rem" className="absolute left-8" />}
        bgColor={"bg-red-500"}
        textColor="text-white"
      ></ProfileButton>
      {userType.current === "buyer" && (
        <ProfileButton
          text={"Become a Seller"}
          bgColor={"bg-pry-clr"}
          textColor="text-white"
          onClick={() => setSellerModal(true)}
        />
      )}
    </div>
  );
};

export default Profile;
