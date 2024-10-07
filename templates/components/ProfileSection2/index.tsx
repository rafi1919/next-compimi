import Link from "next/link";
import { Button } from "../Buttons";

interface profileProps {
  name: string;
  instagram: string;
  event?: [];
}

const Profile = ({ name, instagram }: profileProps) => {
  return (
    <div className="px-2 pb-2  w-full h-[30%]">
      <div className="bg-white p-2 rounded-[40px] w-full h-full flex justify-start items-center gap-4">
        <div className="bg-slate-600 rounded-[40px] h-full w-full"></div>
        {/* <div className="">
            <p className="">
              name :<span className="text-md font-semibold">{name}</span>
            </p>
            <p>
              instagram :<span className="text-md font-semibold">{instagram}</span>
            </p>
            <Link href="/profileupdate">
              <Button text="Edit Profile" />
            </Link>
          </div> */}
      </div>
    </div>
  );
};

export default Profile;
