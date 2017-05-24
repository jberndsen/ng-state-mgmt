import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  // todo: make these configurable, have a look at
  // https://github.com/phenomnomnominal/angular-2-local-storage/
  private prefix = 'ng2_app';
  private storageType: 'sessionStorage' | 'localStorage' = 'sessionStorage';
  private storage: any;

  constructor() {
    if (this.checkSupport()) {
      this.storage = window[this.storageType];
    } else {
      throw new Error(`${this.storageType} is not supported in this browser.`);
    }
  }

  public set(key: string, value: any): void {
    // convert undefined to null for value type consistency
    if (value === undefined) {
      value = null;
    } else {
      value = JSON.stringify(value);
    }

    // attempt to store in storage
    try {
      if (this.storage) {
        this.storage.setItem(this.getKey(key), value);
      }
    } catch (e) {
      throw new Error(`Storing to ${this.storageType} failed. Original message: ${e.message}`);
    }
  }

  public get<T>(key: string): T {
    const item = this.storage ? this.storage.getItem(this.getKey(key)) : null;

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  }

  public clear(key: string): void {
    try {
      this.storage.removeItem(this.getKey(key));
    } catch (e) {
      throw new Error(`Clearing '${key}' from ${this.storageType} failed. Original message: ${e.message}`);
    }
  }

  public clearAll(): void {
    const prefixLength = this.prefix.length;
    for (const key in this.storage) {
      if (key.substr(0, prefixLength) === this.prefix) {
        try {
          this.storage.removeItem(key);
        } catch (e) {
          throw new Error(`Clearing everything from ${this.storageType} failed. Original message: ${e.message}`);
        }
      }
    }
  }

  private getKey(key) {
    return `${this.prefix}.${key}`;
  }

  private checkSupport(): boolean {
    return this.storageType in window && window[this.storageType] !== null;
  }
}
