# Restaurangapp

Det här är ett skolprojekt byggt i React Native och Expo. Appen visar restaurangen The Steakhouse med information om restaurangen och en meny med olika maträtter och drycker.

## Funktioner

- Startsida med restauranginformation, adress och kontaktuppgifter.
- Meny indelad i starters, steaks, sides, sauces, drinks och desserts.
- Detaljsida med bild, beskrivning och pris för varje rätt.
- Lägg till och ta bort rätter från favoriter.
- Öppna karta, e-post eller telefon från startsidan.
- Navigera mellan startsida, meny, kategorier, favoriter och detaljer.

## Teknik

- React Native
- Expo (SDK 57)
- React Navigation med native stack
- JavaScript
- Safe Area Context

## Starta projektet

Installera först projektets paket:

```bash
npm install
npx expo start
```

Därefter kan appen öppnas med någon av de Expo-utvecklingsmöjligheter som visas i terminalen.

## Projektstruktur

- `screens/` innehåller appens olika skärmar.
- `components/` innehåller återanvändbara komponenter.
- `data/` innehåller information om menyns rätter.
- `context/` innehåller tillstånd för favoriter och meddelanden.
- `assets/` innehåller bilder för appen.
- `App.js` sätter upp navigationen och appens providers.
