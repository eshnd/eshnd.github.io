if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

fetch('random-number-generator-testing.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('w').textContent = data["random-test-w"];
    document.getElementById('d').textContent = data["random-test-d"];
  })
  .catch(err => console.error('Failed to fetch JSON:', err));
