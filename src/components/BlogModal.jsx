const BlogModal = ({ blog, onClose }) => {
    if (!blog) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{blog.content}</p>
          <p className="text-sm text-gray-500 mb-6">By {blog.author} on {blog.date}</p>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default BlogModal;