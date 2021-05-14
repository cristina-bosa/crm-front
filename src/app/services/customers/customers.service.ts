import { Injectable } from '@angular/core';
import axios from 'axios';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiURL = "http://localhost:3000/customers";
  
  constructor() { }

  getAll() : Promise<Customer[]>{
    return axios.get(this.apiURL)
    .then(res => res.data)
    .catch(e => console.log(e));
  }
}
