import axios from 'axios';

// Set default headers for all requests
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
axios.defaults.headers.common['Accept'] = 'application/json'; // Make sure the server knows we accept JSON responses

// You can now use axios throughout your app without explicitly setting headers
