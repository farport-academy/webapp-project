import { Injectable } from '@angular/core';
import { EssentialService } from '../../shared/core/essentialService';
import { Observable } from 'rxjs';
import { User } from '../../pages/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends EssentialService {
  constructor() {
    super();
    this.apiPath = 'users';
  }

  createUsers(user: User): Observable<User> {
    return this.apiCall({
      type: 'POST',
      url: this.apiUrl + '/add',
      options: {
        body: user,
      },
    });
  }
}
