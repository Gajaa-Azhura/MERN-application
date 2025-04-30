import BlogCard from './BlogCard';

const BlogList = ({ blogs, onReadMore }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} onReadMore={onReadMore} />
    ))}
  </div>
);

export default BlogList;