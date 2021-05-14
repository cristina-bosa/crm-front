import { HostListener, Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getAll() : Customer[]{
    return [{
      name: "Luis",
      email: "luis@.com",
      contacted: true,
      photoURL: "",
    },
    {
      name: "Pepe",
      email: "luis@.com",
      contacted: true,
      photoURL: "",
    }
  ];
  }

}
