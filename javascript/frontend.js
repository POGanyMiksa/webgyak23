const cimkontener = document.createElement("div");
cimkontener.id = "cimkontener"
cimkontener.className = "container-fluid";

const cimsor = document.createElement("row");
cimsor.className = "row";

const focim = document.createElement("h1");
focim.id = "focim"
focim.className = "display-5 text-center";
focim.textContent = "Trigonometria";

const alcim = document.createElement("h4");
alcim.id = "alcim"
alcim.className = "text-center";
const most = new Date();
const nap = most.getDate();

const bevezetes = document.createElement("p");
bevezetes.id = "bevezetes"
bevezetes.textContent = `A trigonometria a matematika azon ága, amely a háromszögek oldalai és szögei közötti összefüggéseket vizsgálja. (A szó a görög trigonon = háromszög és metron = mérés szavak összetételéből származik.) Lényegében azt mutatja meg, hogyan tudjuk kiszámolni egy háromszög ismeretlen oldalait vagy szögeit, ha van elegendő kiinduló adatunk.`;

if (nap === 1) {
    alcim.textContent = "Kellemes Hétfőt kívánok";
}
else if (nap === 2) {
    alcim.textContent = "Kellemes Keddet kívánok";
}
else if (nap === 3) {
    alcim.textcontent = "Kellemes Szerdát kívánok";
}
else if (nap === 4) {
    alcim.textContent = "Kellemes csütörtököt kívánok";
}
else if (nap === 5) {
    alcim.textContent = "Kellemes Pénteket kívánok";
}
else if (nap === 6) {
    alcim.textContent = "Kellemes Szombatot kívánok";
}
else if (nap === 7) {
    alcim.textContent = "Kellemes Vasárnapot kívánok";
}

const mainkontener = document.createElement("div");
mainkontener.id = "mainkontener"
mainkontener.className = "container-fluid";

const baloszlop = document.createElement("row");
baloszlop.id = "baloszlop"
baloszlop.className = "col-sm-6";

const mainfocim = document.createElement("h2");
mainfocim.textContent = "A trigonometrikus függvények"

const fuggveny = document.createElement("p");
fuggveny.id = "fuggveny"
fuggveny.textContent = `A trigonometrikus függvények a derékszögű háromszögek oldalarányainak általánosításából származnak, amelyeket az egységkör segítségével terjesztünk ki tetszőleges valós számokra mint radiánban mért forgásszögekre. A koordinátarendszer origója körüli egységkörben egy alfa forgásszöghöz tartozó pont első koordinátája a koszinusz, a második koordinátája pedig a szinusz értéke. A szinusz és a koszinusz függvény értelmezési tartománya a valós számok teljes halmaza, míg korlátos értékkészletük a mínusz egytől egyig terjedő intervallumra terjed ki. Mindkét függvény kettő pi szerint periodikus, azonban paritásuk tekintetében eltérnek: a szinusz páratlan, míg a koszinusz páros függvény, azaz a szinusz mínusz iksz egyenlő mínusz szinusz ikszel, a koszinusz mínusz iksz pedig egyenlő koszinusz ikszel.

A tangens és kotangens függvényeket a szinusz és koszinusz hányadosaként definiáljuk: a tangens a szinusz és koszinusz, a kotangens pedig a koszinusz és szinusz hányadosa. Ebből adódóan a tangens nem értelmezett ott, ahol a koszinusz értéke nullát vesz fel, vagyis pi felett plusz ka szorozva pi-vel, ahol a ka egész szám, míg a kotangens a szinusz zérushelyein, azaz ka szorozva pi-vel nem értelmezett. Mindkét hányadosfüggvény értékkészlete a teljes valós számhalmaz, periódusuk a szinusszal és koszinusszal ellentétben pi, és mindkettő páratlan függvény.

A trigonometria legalapvetőbb összefüggése a Pitagorasz-tételből származó trigonometrikus egyes, amely szerint minden valós ikszre a szinusz negyzet iksz meg a koszinusz negyzet iksz összege egyenlő eggyel. Emellett a tangens és kotangens szorzata az értelmezési tartományuk közös részén mindig eggyel egyenlő. A nevezetes szögek esetén, mint a nulla, a harminc fok, a negyvenöt fok, a hatvan fok és a kilencven fok, a függvényértékek pontos gyökös alakban fejezhetők ki; például a szinusz és a koszinusz értéke negyvenöt foknál egyaránt gyök kettő per kettő, míg a tangens értéke ugyanitt pontosan egy.`

cimkontener.append(cimsor, focim, alcim, bevezetes);
baloszlop.append(mainfocim, fuggveny);
mainkontener.append(baloszlop);
document.body.append(cimkontener, mainkontener);