// these images shall be updated dynamically from the user's profile as stored in the database
const Avater = () => {
  return (
    <>
      <div className="w-24 h-24 flex justify-center m-auto items-center overflow-hidden text-white rounded-full bg-black">
        <img
          alt="this is a profile image"
          src="../../../public/avatar-man.png"
          className="block"
        />
      </div>
    </>
  );
};
export default Avater;
