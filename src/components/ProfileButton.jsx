const ProfileButton = ({ text, textColor, bgColor, icon, border, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`transform relative  w-full flex gap-x-4 justify-center items-center ${
        textColor + " " + bgColor + " " + border
      } py-3 px-2 rounded-xl cursor-pointer hover:-translate-y-1 transition-transform`}
    >
      {icon && icon}
      <p className="text-base font-medium text-center mx-14 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

ProfileButton.defaultProps = {
  text: "Pass a text prop to rename",
  textColor: "text-black",
  bgColor: "bg-white",
  border: "",
};

export default ProfileButton;
