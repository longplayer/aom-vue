// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
export default {
  head: {
    title: 'Age of Robots | Miguel Fernandez',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Présentation de mes travaux artistiques. Artiste résidant à Bruxelles dans le quartier des Marolles près du Vieux Marché aux Puces. Je crée des peintures et des sculptures de robots inspirés par la science-fiction et fait de matériaux de récupération.' },
      { name: 'keywords', lang: 'fr', content: 'Miguel, Fernandez, Miguel Fernandez, art de miguel fernandez, age of robots, peinture, peintures, pictural, toile, tableau, sculpture, sculptures, robot, robots, kitbash, expo, exposition, expositions, art, artiste, artiste peintre, sculpteur, a normal graffizm, (A)normal Graffizm, recyclage, recuperation, objets, fernandes, fernandez, of, fernandez'},
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'KZauwPn6Y-hvpFsfa-FNaiRYaMFrS74agsULk5UbG_I' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [],
  },
}
