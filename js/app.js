document.getElementById('btn-1').addEventListener('click', getText);
document.getElementById('btn-2').addEventListener('click', getJSON);
document.getElementById('btn-3').addEventListener('click', getAPI);

// Get Data from .txt
function getText() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('loader').className = 'd-block';
  fetch('localDB/data.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data)
    setTimeout(function() {
      document.getElementById('loader').className = 'd-none';
      document.getElementById('result').innerHTML = `<h4>Results</h4><li>${data}</li>`;
    }, 800)
  })
  .catch(function(err) {
    console.log(err)
  });
}

// Get Data from JSON
function getJSON() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('loader').className = 'd-block';
  fetch('localDB/data.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data)
    setTimeout(function() {
      document.getElementById('loader').className = 'd-none';
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('result').innerHTML = `<h4>Results</h4>${output}`;
    }, 800)
  })
  .catch(function(err) {
    console.log(err)
  })
}

// Get Data from JSON
function getAPI() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('loader').className = 'd-block';
  fetch('https://api.github.com/users')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data)
    setTimeout(function() {
      document.getElementById('loader').className = 'd-none';
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('result').innerHTML = `<h4>Results</h4>${output}`;
    }, 800)
  })
  .catch(function(err) {
    console.log(err)
  })
}