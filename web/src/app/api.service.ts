import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  public getResult = () => {
    return this.client.get<IResult>("http://localhost:9000");
  };
}

export interface IResult {
  message: string;
}
