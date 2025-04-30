import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BlogForm from '../components/BlogForm';
import Footer from '../components/Footer';

const initialBlogs = [
  { id: 1, title: 'First Blog Post', content: 'This is the full content...', author: 'John Doe', date: '2025-04-01' },
  { id: 2, title: 'Second Blog Post', content: 'This is the full content...', author: 'Jane Smith', date: '2025-04-02' },
];

const AdminDashboard = () => {
  const [blogList, setBlogList] = useState(initialBlogs);

  const handleAddBlog = (newBlog) => {
    setBlogList([...blogList, { id: blogList.length + 1, ...newBlog }]);
  };

  const handleDelete = (id) => {
    setBlogList(blogList.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-50">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold text-gray-800">Dashboard Overview</h1>} />
            <Route path="add-blog" element={<BlogForm onSubmit={handleAddBlog} />} />
            <Route path="manage-blogs" element={
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Manage Blogs</h1>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700">
                        <th className="p-4 text-left">ID</th>
                        <th className="p-4 text-left">Title</th>
                        <th className="p-4 text-left">Author</th>
                        <th className="p-4 text-left">Date</th>
                        <th className="p-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogList.map((blog) => (
                        <tr key={blog.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">{blog.id}</td>
                          <td className="p-4">{blog.title}</td>
                          <td className="p-4">{blog.author}</td>
                          <td className="p-4">{blog.date}</td>
                          <td className="p-4">
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-600 transition-all duration-200">
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all duration-200"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            } />
            <Route path="users" element={<h1 className="text-4xl font-bold text-gray-800">Users Management</h1>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;