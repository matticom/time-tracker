import { Injectable } from '@angular/core';
import {MockUser} from './mockUser';

@Injectable()
export class MockLoginService {

  user: MockUser;

  constructor() {
  }

  login(email: string, password: string): MockUser {
    if (email === "test@test.de" && password ==="test") {
      this.user = new MockUser(email, password);
      return this.user;
    } else {
      return null;
    }
  }

  logout(user: MockUser): boolean {
    if (user) {
      this.user = null;
      return true;
    } else {
      return false;
    }
  }

  isCurrentlyUserLoggedIn(): boolean {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}
