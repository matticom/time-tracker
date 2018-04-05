import { Injectable } from '@angular/core';

@Injectable()
export class IdGeneratorService {

  private id: number;

  constructor() {
    this.id = 0;
  }

  public getNextId(): number {
    return ++this.id;
  }
}
