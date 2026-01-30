import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

export class Service{
  client = new Client;
  databases;
  bucket; // storage
 
  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title, content, featuredImage, status, 
userId}){
    try {
      const post = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
      return post;

    } catch (error) {
      console.log("Error while creating the post: ", error);
    }    
  }

  async updatePost(ID,{title, content, featuredImage, status}){
    try {
      const postUpdate = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID,
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
      return postUpdate;

    } catch (error) {
      console.log("Error while updating the post: ", error);
    }    
  }

  async deletePost(ID){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID,
      )
      return true;

    } catch (error) {
      console.log("Error while updating the post: ", error);
      return false;
    }    
  }

  async getPost(ID){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID,
      )
    } catch (error) {
      console.log("Error while getting post: ", error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal('status','active')]){
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log("Error while getting All posts: ", error);
      return false;
    }
  }


  // upload file services

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("Error while uploading file: ", error);
      return false;
    }
  }

  async fileDelete(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log("Error while deleting file: ", error);
      return false;
    }
  }

  getPreviewFile(fileId){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }

}

const service = new Service();
export default service;