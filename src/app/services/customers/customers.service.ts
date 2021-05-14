import { HostListener, Injectable } from '@angular/core';
import axios from 'axios';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getAll() : Promise<Customer[]>{
    return axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.data)
    .catch(e => console.log(e));
  }
}
