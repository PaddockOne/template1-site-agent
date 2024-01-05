const header: {
  location: {
    localisation: string;
    localisation_map: string;
    address: string;
    horaire: string;
    horaire_weekend: string;
  };
  phone: string;
  brand: {
    h1_1: string;
    h1_2: string;
  };
} = {
  location: {
    localisation: "https://goo.gl/maps/ku4aFjh4oGNiS1xN8",
    localisation_map:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11369.175398940632!2d6.1811782!3d44.5705559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x182e9ba5197ef442!2sBrenier%20Automobiles%20-%20Renault%20Dacia%20La%20B%C3%A2tie%20neuve!5e0!3m2!1sfr!2sfr!4v1668079046323!5m2!1sfr!2sfr",
    address: "La Faurie, 05230 La Bâtie-Neuve",
    horaire: "lun-jeu: 7:00-12:30, 13:30-18:30",
    horaire_weekend: "sam: 09:00-12:00",
  },
  phone: "04 92 50 30 91",
  brand: {
    h1_1: "Garage",
    h1_2: "Brenier",
  },
};
export default header;
