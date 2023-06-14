import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class UserExpertiseService {
  
  baseurl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  //login with payload as email & password
  login(payload: any) {
    return this.httpClient.post(`${this.baseurl}/api/user/login`, payload);
  }

  //add user
  addUser(payload: any) {
    return this.httpClient.post<User>(`${this.baseurl}/api/user`, payload);
  }

  //get all users
  getAllUsers() {
    return this.httpClient.get(`${this.baseurl}/api/users`);
  }
  //get all users
  getAllUsersByExpertise(expertise:string) {
    console.log(expertise);
    return this.httpClient.get(`${this.baseurl}/api/userByExpertise/${expertise}`);
  }

  //get user by id
  getUserById(id: any) {
    return this.httpClient.get(`${this.baseurl}/api/user/${id}`);
  }

  //update user by id
  updateUserById(id: any, payload: any) {
    return this.httpClient.put(`${this.baseurl}/api/user/${id}`, payload);
  }

  //delete user by id
  deleteUserById(id: any) {
    return this.httpClient.delete(`${this.baseurl}/api/user/${id}`);
  }

  //get usertype
  getUserType(userType: any) {
    return this.httpClient.get(`${this.baseurl}/api/userType${userType}`);
  }

  //get user expertises
  getUserExpertises(id: any) {
    return this.httpClient.get(`${this.baseurl}/api/userExpertises${id}`);
  }

  //add expertises
  addExpertises(payload: any) {
    return this.httpClient.post(`${this.baseurl}/api/expertise`, payload);
  }

  //get all expertises
  getAllExpertises() {
    return this.httpClient.get(`${this.baseurl}/api/expertise`);
  }

  getExpertisesById(id: any) {
    return this.httpClient.get(`${this.baseurl}/api/expertise/${id}`);
  }

  //find expertises by user id
  getExpertisesByUserId(userid: any) {
    return this.httpClient.get(
      `${this.baseurl}/api/expertise-userid/${userid}`
    );
  }

  //update expertises by id
  updateExpertisesById(id: any, payload: any) {
    return this.httpClient.put(`${this.baseurl}/api/expertise/${id}`, payload);
  }

  //delete expertises by id
  deleteExpertisesById(id: any) {
    return this.httpClient.delete(`${this.baseurl}/api/expertise/${id}`);
  }

  getWorkHistory() {
    return this.httpClient.get(`${this.baseurl}/api/expertise`);
  }
}
