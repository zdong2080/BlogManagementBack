
const {admin, serviceAccount} = require('./configuration/firebase.js');
const express = require('express');
const handleSignup = require('./auth/signup.js');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
// test if firebase configured correctly
// async function testFirebase() {
//   try {
//     const firestore = admin.firestore();
//     const data = {
//       name: 'Boyu Li',
//       email: 'liboyu1999@tamu.edu',
//     };

//     const docRef = firestore.collection('users').doc();
//     await docRef.set(data);

//     console.log('Test data added to Firestore successfully');


//   } catch (error) {
//     console.error('Error testing Firebase:', error);
//   }
// }

// testFirebase();



// test if sign up is successful








