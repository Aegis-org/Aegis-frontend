
const ProfileButton = ({ text, textColor, bgColor, route, icon}) => {
    return (
        <div className={`relative  w-full flex gap-x-4 justify-center items-center ${textColor + ' ' + bgColor} border-2 py-3 px-2 rounded-3xl cursor-pointer hover:translate-y-5 `}>
            {icon && icon}
            <p className="text-xl font-medium text-center mx-14 whitespace-nowrap">{text}</p>
        </div>
    )
}

ProfileButton.defaultProps = {
    text: "Pass a text prop to rename",
    textColor: "text-black",
    bgColor: "bg-white",
    route: ""
  }

export default ProfileButton
