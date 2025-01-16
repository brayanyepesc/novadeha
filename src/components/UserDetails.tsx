import { memo, useCallback } from "react";
import { User } from "../types/types";
import ProfilePicture from "../assets/profile-picture.webp";
import { LuTrash } from "react-icons/lu";
import Swal from "sweetalert2";

const UserDetails = ({ user }: { user: User }) => {
  const deleteUser = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Functionality not implemented yet!",
    });
  }, []);
  return (
    <div className="w-full shadow-lg flex p-2 rounded-lg relative">
      <img src={ProfilePicture} alt="" className="rounded-full w-40 h-40" />
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key} className="mb-2">
            <span className="text-novaviolet font-semibold capitalize">
              {key}:
            </span>{" "}
            {String(value)}
          </li>
        ))}
      </ul>
      <button
        onClick={deleteUser}
        className="absolute bottom-2 right-2 p-2 rounded-full bg-novaviolet cursor-pointer text-white"
      >
        <LuTrash />
      </button>
    </div>
  );
};

export default memo(UserDetails);
