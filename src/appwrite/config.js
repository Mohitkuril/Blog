import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.blogurl).setProject(conf.blogprojectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.blogdatabaseid,
        conf.blogcollectionid,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error, "post");
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.blogdatabaseid,
        conf.blogcollectionid,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.blogdatabaseid,
        conf.blogcollectionid,
        slug
      );
      return true;
    } catch (error) {
      console.log(error, "deleted");
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.blogdatabaseid,
        conf.blogcollectionid,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.blogdatabaseid,
        conf.blogcollectionid,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.blogbucketid, ID.unique(), file);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.blogbucketid, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.blogbucketid, fileId);
  }
}

const service = new Service();

export default service;
