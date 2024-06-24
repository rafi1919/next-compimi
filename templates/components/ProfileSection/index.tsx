interface profileProps {
  name: string;
  instagram: string;
  event?: [];
}

const Profile = ({ name, instagram }: profileProps) => {
  return (
    <div className="lg:fixed md:block block lg:w-[470px] md:w-full w-full bg-white rounded-xl h-[95vh] p-4 lg:m-4 m-0">
      <div className="bg-slate-600 rounded-xl w-full h-[300px]"></div>
      <div>
        <p className="">
          name :<span className="text-md font-semibold">{name}</span>
        </p>
        <p>
          instagram :<span className="text-md font-semibold">{instagram}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
