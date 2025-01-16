import { LuSearch } from "react-icons/lu"
import { User } from "../types/types"
import { Dispatch, SetStateAction } from "react"

export const UserCard = ({ user, onSelectUser }: { user: User, onSelectUser: Dispatch<SetStateAction<User | null>> }) => {
  return (
    <li className="p-5 rounded-lg shadow-md">
        <div className="w-full text-center p-5 rounded-lg relative">
            <button className="cursor-pointer absolute rounded-full -top-2 -right-2 w-5 h-5 bg-novaorange text-white text-xs flex items-center justify-center" onClick={() => onSelectUser(user)}>
              <LuSearch />
            </button>
            {user.name}
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">{user.email}</p>
    </li>
  )
}