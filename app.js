document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest(); 

  // OPEN 
  xhr.open('GET', 'data.txt', true);


// Optional - Used for spinners/loaders
xhr.onprogress = function() {
  console.log('READYSTATE', xhr.readyState);
}

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

// xhr.onreadystatechange = function() {
//   console.log('READYSTATE', xhr.readyState);
//   if(this.status === 200 && this.readyState === 4) {
//     console.log(this.responseText);
//   }
// }

// Catch Errors
xhr.onerror = function() {
  console.log('Request error...');
}

  xhr.send();

  // HTTP statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}