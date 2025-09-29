
function UserProfile() {
  return (
    <div className="bg-gray-100  p-4 sm:p-4 md:p-8  max-w-xs mx-auto sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-2xl shadow-md rounded-2xl my-20">
      <img className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover shadow-md" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-lg md:text-xl font-bold text-gray-800">John Doe</h1>
      <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;