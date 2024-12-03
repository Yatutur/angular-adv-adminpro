import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'node:path';

@Component({
  selector: 'app-promises',
  standalone: false,

  templateUrl: './promises.component.html',
  styles: ``
})
export class PromisesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  //  const promise = new Promise( (resolve, reject) => {
  //    if (false) {
  //      resolve('Hola mundo promesas.');
  //    } else {
  //      reject('Something went wrong.');
  //    }
  //  });
//
//
  //  promise.then( (message) => {
  //    console.log(message);
  //  }).catch(error => console.log('Error in the promise', error));
//
  //  console.log('Fin del init promesas.');
    this.getUsers().then(users => {
      console.log(users);
    })
  }

  getUsers() {
    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then( response => response.json())
        .then(body => resolve(body.data));
    });
  }
}
