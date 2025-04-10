import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.blogurl).setProject(conf.blogprojectid);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error, "createAccount");
    }
  }

  async login({ email, password }) {
    try {
      console.log(email, password, "userAccount");

      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error, "login");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error, "getCurrentUser");
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error, "logOut");
    }
  }
}

const authService = new AuthService();

export default authService;
