> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Your tribe for life - Profile card
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Redesign je visitekaartje op basis van een headless CMS en een framework.

## 📋 Inhoudsopgave

  * [Beschrijving](https://github.com/Annevd/your-tribe-for-life-profile-card/blob/main/README.md#-beschrijving)
  * [Kenmerken](https://github.com/Annevd/your-tribe-for-life-profile-card/blob/main/README.md#-kenmerken)
  * [Installatie](https://github.com/Annevd/your-tribe-for-life-profile-card/blob/main/README.md#-installatie)
  * [Gebruik](https://github.com/Annevd/your-tribe-for-life-profile-card/blob/main/README.md#%EF%B8%8F-gebruik)
  * [Bronnen](https://github.com/Annevd/your-tribe-for-life-profile-card/blob/main/README.md#%E2%84%B9%EF%B8%8F-bronnen)
  * [Licentie](#licentie)

## 📄 Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Dit visitekaartje laat zien wie ik ben, wat ik leuk vind en waar ik te vinden ben. Er staat een korte biografie over wat ik doe en overige belangrijke informatie zoals mijn huidige woonplaats, leeftijd, github profiel en codepen profiel. 
Voor dit visitekaartje wilde ik mezelf kwa design uitdagen, en heb gekozen voor een speelse layout met grid, en een passende animatie rondom het kaartje. Als inspiratie voor dit visitekaartje heb ik Y2K en Cyberpunk genomen en deze gecombineerd tot een geheel. Door de animatie blijft het interessant om naar te kijken.
<!-- Voeg een mooie poster visual toe 📸 -->

![profile-card-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/3671ccb8-2513-4207-bdde-f18c9820ec50)

<!-- Voeg een link toe naar Github Pages 🌐-->
[Link naar mijn visitekaartje](https://your-tribe-for-life-profile-card-virid.vercel.app/)

## 📍 Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Voor dit visitekaartje gebruik ik het framework Sveltekit en haal ik data op uit [Directus](https://fdnd.directus.app/items/person/11).

De HTML is opgedeeld in een `<article>` met daarin een `<h1>`, `<ul>`'s met daarin `<li>`'s, `<p>`'s en waar nodig een paar `<div>`'s en `<span>`'s voor CSS styling. Met CSS `keyframes` heb ik mijn zelfgemaakte ster svg's laten animeren over een orbit om mijn visitekaartje heen. Elke ster heeft een andere animatie snelheid zodat ze niet tegelijkertijd animeren.

Ik ben uiteraard mobile first begonnen, en het kaartje is responsive tot aan het kleinste scherm van `320`px. Op kleine mobiele schermen staat de animatie uit, omdat daar geen ruimte er voor is.

## 📲 Installatie

Volg onderstaande stappen om zelf te werken aan deze code:

- [x] Installeer NodeJs
- [x] Fork/clone deze repository
- [x] Open het in een code editor naar keuze
- [x] Ga naar de directory 'frontend' door in de terminal `cd frontend` te typen
- [x] Run de command npm install
- [x] Run de command npm run dev
- [x] Klik op de localhost link en begin met coden!

## ✂️ Gebruik

Om deze pagina live te bekijken kan je klikken op de [livelink](https://your-tribe-for-life-profile-card-virid.vercel.app/) in de About sectie van deze repository.

Op dit visitekaartje kan je lezen wie ik ben en waar ik vandaan kom, en kan je klikken op verschillende links om te naar mijn Github, Codepen of Instagram te gaan.

## ℹ️ Bronnen

- [SvelteKit @ kit.svelte.dev](https://kit.svelte.dev/)
- [Svelte getting started @ MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Getting Started with Directus and SvelteKit @ docs.directus.io](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


