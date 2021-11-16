import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,) { }

  // Sends post request to the profile controller that then responds
  // with httpstatus code
  registerProfile(profile: Profile): Observable<any> {
    return this.http.post('http://localhost:8082/profile/register', profile,
    {observe: 'response'});
  }

  getProfileByPid(pid: number): Observable<Profile>{
    return this.http.get(`http://localhost:8082/profile/profiles/${pid}`)
  }

  updateProfile(profile: Profile): Observable<Profile>{
    return this.http.put(`http://localhost:8082/profile/profiles/${profile.pid}`, profile);
  }
  
  login(username: string, password: string): Observable<HttpResponse<Profile>> {    
    return this.http.post<Profile>('http://localhost:8082/profile', `username=${username}&password=${password}`, { observe: 'response', headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
