function pageLoad() {

	const root = document.querySelector("#root");

	let notes = [];

	// 

	notes.push({
		tag: "div class='rule'",
		content:"1. HTML: Figyelj oda a tabolásra!"
	});

	notes.push({
		tag: "code",
		content:`
		body - tab - div - tab
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"2. HTML: Mindig kerüljön a head-be a script és a style linkje, és külön fáljba a JS és a style is!"
	});

	notes.push({
		tag: "code",
		content:`
		link rel="stylesheet" href="./styles.css" | script src="./script.js"></script
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"3. HTML: Használj kikövetkeztethető class és id neveket, hogy később is átlásd a kódot!"
	});

	notes.push({
		tag: "code",
		content:`
		div class="galleryContainer"
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"1. CSS: Mindig figyelj a property megadás sorrendjére!"
	});

	notes.push({
		tag: "code",
		content:`
		position, display, width, height, padding, border, margin
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"2. CSS: Figyelj oda, hogy melyik selector-ral választasz ki egy adott elemet!"
	});

	notes.push({
		tag: "code",
		content:`
		.heroContainer h2{}
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"3. CSS: Figyelj a reszponzív design-ra is, ne utólag szenvedj vele!"
	});

	notes.push({
		tag: "code",
		content:`
		@media screen and (max-width: 600px) {}
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"1. JS: Mindig tedd be a page load függvényt, sokat segít!"
	});

	notes.push({
		tag: "code",
		content:`
		function pageLoad() {}
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"2. JS: Tervezd meg előre, akár kommentekkel, hogy mit fogsz csinálni!"
	});

	notes.push({
		tag: "code",
		content:`
		// Ide most egy kommentet fogok írni!
		`
	});

	notes.push({
		tag: "div class='rule'",
		content:"3. JS: Figyelj a tabolásra, hogy átláthatóbb legyen a kód!"
	});

	notes.push({
		tag: "code",
		content:`
		Függvény - tab - tartalma | tömb - tab - tartalma | objektum - tab - tartalma
		`
	});


	for(note of notes){
		
		root.insertAdjacentHTML("beforeend", `<${note.tag}>${note.content}</${note.tag}>`)

	}

	console.log(notes)

// 1. Reszponzív oldalak létrehozása a @media és a layout-ok segítségével
// 2. Flexbox layout-okkal sokkal gyorsabb és hatékonyabb kivitelezés
// 3. insertAdjacentHTML-lel és for ciklussal nagyon gyors tartalom létrehozás

// 2. HTML: Mindig a head-be kerüljön a script és a style linkje, és külön fáljba a JS és a style is!
// 3. HTML: Használj kikövetkeztethető class és id neveket, hogy később is átlásd a kódot!

// 1. CSS: Mindig figyelj a property megadás sorrendjére!
// 2. CSS: Figyelj oda, hogy melyik selector-ral választasz ki egy adott elemet!
// 3. CSS: Figyelj a reszponzív design-ra is, ne utólag szenvedj vele!

// 1. JS: Mindig tedd be a page load függvényt, sokat segít!
// 2. JS: Tervezd meg előre, akár kommentekkel, hogy mit fogsz csinálni!
// 3. JS: Figyelj a tabolásra, hogy átláthatóbb legyen a kód!


}
window.addEventListener("load", pageLoad);