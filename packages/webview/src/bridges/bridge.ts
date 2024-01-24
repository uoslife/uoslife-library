import { Driver } from '../driver';

export class Bridge {
  constructor(private readonly _driver: Driver) {}

  get driver() {
    return this._driver;
  }
}
