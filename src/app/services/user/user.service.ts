import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  users: User[] = [
    {id: 1, firstname: 'Bastien', lastname: 'Munier', username: 'bmu', email: 'bastien.munier@gmail.com'},
    {id: 2, firstname: 'Helium', lastname: 'Test', username: 'He', email: 'bastien.munier@gmail.com'},
    {id: 3, firstname: 'Lithium', lastname: 'Test', username: 'Li', email: 'bastien.munier@gmail.com'},
    {id: 4, firstname: 'Beryllium', lastname: 'Test', username: 'Be', email: 'bastien.munier@gmail.com'},
    {id: 5, firstname: 'Boron', lastname: 'Test', username: 'B', email: 'bastien.munier@gmail.com'},
    {id: 6, firstname: 'Carbon', lastname: 'Test', username: 'C', email: 'bastien.munier@gmail.com'}];

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/';

  public getUsers(): User[] {
    return this.users;
  }

}
