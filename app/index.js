import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SCSS from './assets/style.scss';
import Layout from './components/Layout.js';

ReactDOM.render(<Layout />, document.getElementById('app'));





// console.log(ReactDOM.render);

// console.log("It's on!");


//
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   static countUsers(){
//     console.log('there are 50 users');
//   }
//
//   register() {
//     console.log(this.username + ' is now registed');
//   }
// }
//
// class Member extends User {
//   constructor(username, email, password, memberPackage) {
//     super(username, email, password);
//     this.package = memberPackage;
//   }
//
//   getPackage() {
//     console.log(this.package + '- this is da package');
//   }
// }
//
// let mike = new Member('mike', 'mikes@email', 'pass123', 'memberpacagewhever')
//
//
// mike.register();
