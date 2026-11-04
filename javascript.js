
// jeg opretter et array med 10 objektor (literal) hver med 4 ens properties//
let brands = [
    { Navn: "Always", Content: "1x video, 2x hooks", Dato: "Okt 2025", Logo: "always.png" },
    { Navn: "Kilroy", Content: "10x videoer, 30x billeder", Dato: "Jul 2026", Logo: "kilroy.png" },
    { Navn: "Mofibo", Content: "1x video", Dato: "Apr 2026", Logo: "mofibo.png" },
    { Navn: "dinApoteker", Content: "3x videoer", Dato: "Jun 2026", Logo: "dinApoteker.png" },
    { Navn: "Karamel Kompagniet", Content: "9x videoer, 12x hooks", Dato: "Nov 2025-", Logo: "karamelKompagniet.png" },
    { Navn: "refurbed", Content: "8x videoer", Dato: "Nov 2025-", Logo: "refurbed.png" },
    { Navn: "Nordicast", Content: "2x videoer, 6x hooks", Dato: "Nov 2025", Logo: "nordicast.png" },
    { Navn: "Protein", Content: "5x videoer, 12x billeder", Dato: "Mar-Maj 2026", Logo: "protein.png" },
    { Navn: "Neglefeber", Content: "3x videoer, 2x hooks", Dato: "Sep-Nov 2025", Logo: "neglefeber.png" },
    { Navn: "Lommeprinter", Content: "4x videoer, 4x billeder", Dato: "Mar 2026", Logo: "lommeprinter.png" },
];

// Finder det HTML-element med id'et "samarbejder" og gemmer det i variablen. 
let samarbejder = document.getElementById("samarbejder");

// jeg laver en for-løkke, der kører én gang for hvert objekt i arrayet.
for (let brand of brands) {
    let path = "fotos/brands/" + brand.Logo; //laver stien til logoet ved at sætte mappen "fotos/brands/" sammen med filnavnet fra objektet, og gemmer det i path

    // jeg opretter nye HTML-elementer med metoden createElement
    let nyDiv = document.createElement("div");  // en boks, der holder alt for ét brand
    let nyBrand = document.createElement("img"); //billede til logoet
    let nyNavn = document.createElement("h3"); // overskrift med brandets navn
    let nyContent = document.createElement("p"); // tekst om content der er lavet
    let nyDato = document.createElement("p"); // tekst med datoen for samarbejdet

    // jeg bruger giver datoteksten klassen "Dato", så jeg kan style den i CSS
    nyDato.classList.add("Dato");

    // jeg sætter attributten "src" på <img>-elementet. Værdien kommer fra variablen "path", så browseren ved, hvilken billedfil den skal vise
    nyBrand.setAttribute("src", path);

    // jeg bruger propertien innerText til at fylde teksten ind i de tre tekstelementer med værdierne fra objektet/arrayet
    nyNavn.innerText = brand.Navn;
    nyContent.innerText = brand.Content;
    nyDato.innerText = brand.Dato;

    // jeg giver html-elementet "boksen" klassen "brand", så jeg kan style dem ens i CSS.
    nyDiv.classList.add("brand");

    // Jeg putter logo, navn, content og dato ind i boksen (i den rækkefølge) med metoden appendChild
    nyDiv.appendChild(nyBrand);
    nyDiv.appendChild(nyNavn);
    nyDiv.appendChild(nyContent);
    nyDiv.appendChild(nyDato);

    //jeg sætter den færdige boks ind på siden i "samarbejder"-elementet med metoden appendChild
    samarbejder.appendChild(nyDiv);
}

