// removed everything, copied from Tip Calculator project as per instructions in homework 2

self.addEventListener('install', event => {
  console.log(`Event fired: ${event.type}`);
  console.dir(event);
});

self.addEventListener('activate', event => {
  console.log(`Event fired: ${event.type}`);
  console.dir(event);
});

// This is what was needed for the homework. I removed what was previously in the fetch
// just console.log and console.dir's (similar to console.log)
// and added in the code that was in the homework 3 instructions

self.addEventListener('fetch', event => {
  let ran= Math.floor(Math.random() * 3) + 1;
  let ranPage = ran.toString() + '.html';
  console.log(`Fetching random ${ranPage}`);
  event.respondWith(fetch(ranPage));
});