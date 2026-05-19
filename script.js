const services = [
  {
    title: 'Interactive Sidebars',
    desc: 'Custom tactical UI systems with animated modules and immersive layouts.'
  },

  {
    title: 'Cinematic Blogs',
    desc: 'Interactive reading systems with elite visual storytelling.'
  },

  {
    title: 'Strategic Announcements',
    desc: 'High-impact communication systems engineered to command attention.'
  },

  {
    title: 'Identity Architecture',
    desc: 'Full branding systems for clubs and individuals.'
  }
];

const cardGrid = document.getElementById('cardGrid');

services.forEach((item, index) => {

  const card = document.createElement('div');

  card.className = 'card';

  card.innerHTML = `
    <div class="card-number">
      0${index + 1}
    </div>

    <h3>${item.title}</h3>

    <p>${item.desc}</p>
  `;

  cardGrid.appendChild(card);

});
