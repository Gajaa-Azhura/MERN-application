const UserSidebar = () => (
    <div className="w-64 bg-gray-100 p-6 h-screen shadow-lg">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
      <ul>
        <li className="mb-3 text-gray-700 hover:text-blue-500 transition-colors duration-200">Technology</li>
        <li className="mb-3 text-gray-700 hover:text-blue-500 transition-colors duration-200">Lifestyle</li>
        <li className="mb-3 text-gray-700 hover:text-blue-500 transition-colors duration-200">Travel</li>
      </ul>
      <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6">Search</h3>
      <input
        type="text"
        placeholder="Search blogs..."
        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
        disabled
      />
    </div>
  );
  
  export default UserSidebar;