import { Component } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private service: ApiService;
  title = 'web';
  result = "loading...";

  constructor(service: ApiService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getResult().subscribe(response => this.result = response.message,
      error => this.result = "error");
  }
}
