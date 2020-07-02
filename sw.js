"use strict";

console.log('WORKER: executing...');

self.addEventListener("install", (event) => {
  console.log('WORKER: install event in progress...', event);
});

self.addEventListener("fetch", (event) => {
  console.log('WORKER: fetch event in progress...', event);
  
});

self.addEventListener("activate", (event) => {
 console.log('WORKER: activate event in progress...', event);
});