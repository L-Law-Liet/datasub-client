import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: any[] = [];
  constructor(private service: ApiService) {
  }
  ngOnInit(): void {
    this.getCurrencies()
  }

  getCurrencies() {
    this.service.getCurrencies().subscribe(res => {
      this.currencies = res;
    })
  }

}
