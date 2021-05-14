import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    //Carga los datos del customerService
    this.customersService.getAll().then(data => this.customers = data);
  }


}
