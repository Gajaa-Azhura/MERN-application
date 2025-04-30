const BlogCard = ({ blog, onReadMore }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
      <p className="text-gray-600 mb-3 line-clamp-2">{blog.content}</p>
      <p className="text-sm text-gray-500 mb-4">By {blog.author} on {blog.date}</p>
      <button
        onClick={() => onReadMore(blog)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm font-medium"
      >
        Read More
      </button>
    </div>
  );
  
  export default BlogCard;