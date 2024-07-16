export default {
  HITSLOP_SMALL: {
    top: 20,
    left: 10,
    bottom: 10,
    right: 10,
  },

  //----FontFamily----//
  FONT_OUTFIT_THIN: 'Outfit-Thin', //100
  FONT_OUTFIT_EXTRA_LIGHT: 'Outfit-ExtraLight', //200
  FONT_OUTFIT_LIGHT: 'Outfit-Light', //300
  FONT_OUTFIT_REGULAR: 'Outfit-Regular', //400
  FONT_OUTFIT_MEDIUM: 'Outfit-Medium', //500
  FONT_OUTFIT_SEMI_BOLD: 'Outfit-SemiBold', //600
  FONT_OUTFIT_BOLD: 'Outfit-Bold', //700
  FONT_OUTFIT_EXTRA_BOLD: 'Outfit-ExtraBold', //800
  FONT_OUTFIT_BLACK: 'Outfit-Black', //900

  //----KundliScreen----//
  KUNDLI_DATA: [
    {id: 1, label: 'Basic'},
    {id: 2, label: '|'},
    {id: 3, label: 'Chart'},
    {id: 4, label: '|'},
    {id: 5, label: 'KP'},
    {id: 6, label: '|'},
    {id: 7, label: 'Ashtakvarga'},
    {id: 8, label: '|'},
    {id: 9, label: 'Dasha'},
    {id: 10, label: '|'},
    {id: 11, label: 'Report'},
  ],

  ASTRO_CHART_DATA: [
    {id: 1, label: '8', row: 0, col: 0},
    {id: 2, label: '6', row: 0, col: 1},
    {id: 3, label: 'Ma', row: 1, col: 0},
    {id: 4, label: 'Mo', row: 1, col: 1},
    {id: 5, label: '9', row: 2, col: 0},
    {id: 6, label: '7', row: 2, col: 1},
    {id: 7, label: '5', row: 2, col: 2},
    {id: 8, label: 'Ke', row: 3, col: 0},
    {id: 9, label: '10', row: 3, col: 1},
    {id: 10, label: '4', row: 3, col: 2},
    {id: 11, label: 'Ra', row: 3, col: 3},
    {id: 12, label: '11', row: 4, col: 0},
    {id: 13, label: '1', row: 4, col: 1},
    {id: 14, label: '3', row: 4, col: 2},
    {id: 15, label: 'Ve Sa', row: 5, col: 0},
    {id: 16, label: 'Me', row: 6, col: 0},
    {id: 17, label: 'Su Ju', row: 7, col: 0},
    {id: 18, label: '12', row: 7, col: 1},
    {id: 19, label: '2', row: 7, col: 2},
  ],

  PLANETS_BUTTON_DATA: [
    {id: 1, label: 'Sign', selected: false},
    {id: 2, label: 'Nakshatra', selected: true},
  ],
  UNDERSTAND_BUTTON_DATA: [
    {id: 1, label: 'General', selected: true},
    {id: 2, label: 'Planetary', selected: false},
    {id: 2, label: 'Yoga', selected: false},
  ],

  PLANETS_DATA: [
    {
      planet: 'Ascendant',
      sign: 'Pisces',
      signLord: 'Jupiter',
      degree: '13°13′24',
      house: 1,
    },
    {
      planet: 'Ascendant',
      sign: 'Pisces',
      signLord: 'Jupiter',
      degree: '13°13′24',
      house: 1,
    },
    {
      planet: 'Sun',
      sign: 'Sagittarius',
      signLord: 'Jupiter',
      degree: '13°13′24',
      house: 10,
    },
    {
      planet: 'Moon',
      sign: 'Aries',
      signLord: 'Mars',
      degree: '13°13′24',
      house: 2,
    },
    {
      planet: 'Mercury',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 11,
    },
    {
      planet: 'Venus',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 11,
    },
    {
      planet: 'Mars',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 11,
    },
    {
      planet: 'Jupiter',
      sign: 'Sagittarious',
      signLord: 'Jupiter',
      degree: '13°13′24',
      house: 10,
    },
    {
      planet: 'Saturn',
      sign: 'Aquarius',
      signLord: 'Jupiter',
      degree: '13°13′24',
      house: 12,
    },
    {
      planet: 'Rahu',
      sign: 'Vigro',
      signLord: 'Mercury',
      degree: '13°13′24',
      house: 12,
    },
    {
      planet: 'Ketu',
      sign: 'Pisces',
      signLord: 'Mercury',
      degree: '13°13′24',
      house: 12,
    },
    {
      planet: 'Neptune',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 12,
    },
    {
      planet: 'Uranus',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 12,
    },
    {
      planet: 'Pluto',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: '13°13′24',
      house: 12,
    },
  ],
};
