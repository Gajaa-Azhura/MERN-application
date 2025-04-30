import { useState } from 'react';
import BlogList from '../components/BlogList';
import BlogModal from '../components/BlogModal';
import UserSidebar from '../components/UserSidebar';
import Footer from '../components/Footer';

const blogs = [
  { id: 1, title: 'First Blog Post', content: 'This is the full content of the first blog post...', author: 'John Doe', date: '2025-04-01' },
  { id: 2, title: 'Second Blog Post', content: 'This is the full content of the second blog post...', author: 'Jane Smith', date: '2025-04-02' },
];

const UserDashboard = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <UserSidebar />
        <div className="flex-1">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">User Dashboard</h1>
            <BlogList blogs={blogs} onReadMore={setSelectedBlog} />
            <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;