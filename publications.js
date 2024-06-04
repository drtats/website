// publications.js

// Replace 'YOUR_SCHOLAR_ID' with your actual Google Scholar ID
const scholarId = 'VcXxK3gAAAAJ';
const apiUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en&cstart=0&pagesize=1000&json=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const publications = data.publications;
    const publicationList = document.getElementById('publication-list');

    publications.forEach(publication => {
      const listItem = document.createElement('li');
      listItem.textContent = publication.title;
      publicationList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching publications:', error);
  });
