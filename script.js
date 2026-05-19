const services = [
  {
    title: 'Interactive Sidebars',
    desc: 'Custom tactical UI systems with animated modules, glow architecture, scan pulse effects, tournament integration, and immersive layouts.'
  },

  {
    title: 'Cinematic Blogs',
    desc: 'Interactive reading systems with expandable modules, integrated chess presentation, dynamic layouts, and elite visual storytelling.'
  },

  {
    title: 'Strategic Announcements',
    desc: 'High-impact communication systems engineered to command attention and strengthen community identity.'
  },

  {
    title: 'Identity Architecture',
    desc: 'Full visual and structural branding systems for clubs and individuals seeking a recognizable digital presence.'
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
