import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white h-screen p-6 shadow-lg">
    <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
    <ul>
      <li className="mb-4">
        <Link to="/admin-dashboard" className="text-lg hover:text-blue-300 transition-colors duration-200">
          Dashboard
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/admin-dashboard/add-blog" className="text-lg hover:text-blue-300 transition-colors duration-200">
          Add Blog
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/admin-dashboard/manage-blogs" className="text-lg hover:text-blue-300 transition-colors duration-200">
          Manage Blogs
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/admin-dashboard/users" className="text-lg hover:text-blue-300 transition-colors duration-200">
          Users
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;