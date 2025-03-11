const conf = {
  blogurl: String(import.meta.env.VITE_BLOG_URL),
  blogprojectid: String(import.meta.env.VITE_BLOG_PROJECT_ID),
  blogdatabaseid: String(import.meta.env.VITE_BLOG_DATABASE_ID),
  blogcollectionid: String(import.meta.env.VITE_BLOG_COLLECTION_ID),
  blogbucketid: String(import.meta.env.VITE_BLOG_BUCKET_ID),
};

export default conf;
