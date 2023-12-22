import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {
    this.isAuthentified()
    .pipe(
      map(() => true),
      catchError(() => of(false))
    )
    .subscribe((isLoggedIn) => {
        this.loggedIn.next(isLoggedIn)
    });
  }

  public isAuthentified() {
    return this.http.get('http://localhost:8000/signin', { withCredentials: true });
  }

  public login(user: string, password: string) {
    return this.http.post('http://localhost:8000/login', {user, password}, { withCredentials: true });
  }

  public checkAvailableUsername(username: string) {
    return this.http.post('http://localhost:8000/usernameIsAvailable', {username});
  }

}
