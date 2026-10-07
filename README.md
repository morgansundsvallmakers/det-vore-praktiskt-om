# Det vore praktiskt om…

## Från idé till fungerande webbsida med ChatGPT och GitHub Pages

Det här är en steg-för-steg-handout som visar ett enkelt sätt att gå från en idé till en publicerad webbsida.

Exemplet som byggs på slutet är medvetet litet:

> **Det vore praktiskt om man kunde vrida och vända på 3D-modeller.**

Vi skapar därför en enkel STL-visare som körs direkt i webbläsaren. Ingen lokal installation behövs för den som använder sidan, och själva STL-filen stannar i webbläsaren.

Den färdiga sidan finns på:

**https://morgansundsvallmakers.github.io/det-vore-praktiskt-om/**

### Öppna handouten på telefonen

Skanna QR-koden för att öppna repot och den här handouten direkt på telefonen:

![QR-kod till repot](<images/qr-det-vore-praktiskt-om.png>)

**https://github.com/morgansundsvallmakers/det-vore-praktiskt-om**

Arbetsgången nedan är testad med **ChatGPT Free**. GitHub-connectorn kunde då både läsa och skriva i det valda repot.

---

## 0. Skapa konton

Du behöver ett konto på både **ChatGPT** och **GitHub**.

1. Skapa en användare på **ChatGPT**.
2. Skapa en användare på **GitHub**.
3. Logga in på båda tjänsterna.

Om du vill hålla experiment och småprojekt åtskilda från privata konton kan du använda ett separat e-postkonto för tjänsterna.

> **Viktigt:** skapa först ett repo på GitHub innan du kopplar GitHub till ChatGPT. När connectorn installeras behöver du välja vilket repo den ska få åtkomst till.

---

## 1. Skapa ditt första repository på GitHub

Börja på GitHub och välj **New repository**.

![Skapa nytt repository](<images/01 skapa nytt repo på github.png>)

Ge repot ett namn och en kort beskrivning. Det är praktiskt att låta GitHub skapa en README-fil direkt.

![Inställningar för nytt repository](<images/02 skapa nytt repo på github steg 2.png>)

I det här exemplet heter repot `det-vore-praktiskt-om`.

![Namn och beskrivning](<images/03 skapa nytt repo på github steg 2b.png>)

Om du följer guiden från ett helt nytt konto kan ett första, enkelt repo också skapas ungefär så här:

![Första repot inför ChatGPT-kopplingen](<images/nytt repo - för att koppla chatgpt.png>)

---

## 2. Koppla GitHub till ChatGPT

När repot finns kan du koppla GitHub till ChatGPT.

Öppna **Pluginer** i ChatGPT, sök efter **GitHub** och välj att lägga till den.

![Hitta GitHub-pluginen](<images/Free ChatGPT plugin.png>)

ChatGPT leder dig genom anslutningen. Beroende på hur ditt konto är inställt kan du behöva bekräfta autentisering eller använda tvåfaktorsautentisering.

![Autentisering](<images/Free ChatGPT plugin 2.png>)

Logga in på GitHub med det konto där du skapade repot.

![Logga in på GitHub](<images/Free ChatGPT plugin 3.png>)

När anslutningen är skapad får du möjlighet att konfigurera vilka repositories ChatGPT ska få arbeta med.

![Konfigurera repositories](<images/Free ChatGPT plugin 4.png>)

Välj helst **Only select repositories** och välj just det repo du vill använda.

![Välj repo och behörigheter](<images/Free ChatGPT plugin 5.png>)

GitHub visar vilka behörigheter connectorn får. För att ChatGPT ska kunna skapa och ändra filer behöver den skrivåtkomst till koden i det valda repot.

När allt ser rätt ut väljer du **Install & Authorize**.

---

## 3. Kontrollera att kopplingen fungerar

Innan du går vidare kan du göra ett mycket enkelt test i ChatGPT, till exempel:

> **Skapa en fil som heter `test.txt` i mitt repo.**

Kontrollera sedan på GitHub att filen verkligen har skapats.

Om det fungerar vet du att ChatGPT kan arbeta direkt i repot.

---

## 4. Gör repot publikt om GitHub Pages ska användas gratis

Jag skapade först repot privat och ändrade det sedan till publikt. Hade det varit publikt från början hade det här steget kunnat hoppas över.

Under **Settings → General → Danger Zone** går det att ändra repositoryts synlighet.

![Ändra repository visibility](<images/10 skapa nytt repo på github steg 2b rättar.png>)

> **Tänk på:** ett publikt repo är synligt för alla. Lägg aldrig lösenord, API-nycklar, tokens eller annan känslig information i repot.

---

## 5. Aktivera GitHub Pages

GitHub Pages kan publicera en vanlig statisk webbsida direkt från repot.

Gå till **Settings** för repot.

![Repository settings](<images/11 github settings för Pages.png>)

Välj **Pages** i vänstermenyn.

![GitHub Pages](<images/12 github settings för Pages 2.png>)

För en enkel sida med vanlig HTML, CSS och JavaScript kan man välja:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/(root)`

![Välj publiceringskälla](<images/13 github settings för Pages 3.png>)

När inställningen är sparad publiceras nya ändringar på `main` automatiskt.

![Pages aktiverat](<images/14 github settings för Pages 4.png>)

För det här repot blir adressen:

**https://morgansundsvallmakers.github.io/det-vore-praktiskt-om/**

---

## 6. Börja med behovet – inte tekniken

Nu kan du beskriva det du vill göra för ChatGPT.

I det här fallet började idén så här:

> **Det vore praktiskt om man kan vrida och vända på 3D-modeller.**

![Idén om en STL-visare](<images/15 det vore praktiskt om man kan vrida och vända på 3D-modeller.png>)

ChatGPT kan hjälpa till att resonera om vad som behövs. För en enkel STL-visare räcker vanlig webbteknik tillsammans med Three.js, STLLoader och OrbitControls.

![Planering av lösningen](<images/16 planering.png>)

---

## 7. Be ChatGPT bygga den första versionen

Prompten behöver inte vara särskilt teknisk. Den här räckte:

> **Gör en enkel webbsida där jag kan välja en STL-fil och sedan vrida, zooma och panorera modellen. Allt ska köras lokalt i webbläsaren och kunna publiceras på GitHub Pages. Om det är lämpligt, välj en ljuslila bakgrund.**

![Prompten](<images/17 prompt.png>)

Eftersom ChatGPT har åtkomst till repot kan den skapa filerna direkt där.

I det här fallet blev det tre vanliga webbfiler:

- `index.html`
- `style.css`
- `app.js`

![Filer skapade i repot](<images/18 filer i repot.png>)

---

## 8. Öppna den färdiga sidan

När filerna ligger på `main` publicerar GitHub Pages sidan automatiskt.

Resultatet blev en STL-visare där man kan välja en lokal STL-fil och sedan vrida, zooma och panorera modellen direkt i webbläsaren.

![Den färdiga STL-visaren](<images/19 resultatet.png>)

---

## Om du senare vill ge ChatGPT åtkomst till fler repositories

När GitHub redan är kopplat till ChatGPT kan du senare ändra vilka repositories connectorn får åtkomst till.

Öppna GitHubs kontoinställningar via profilikonen och **Settings**.

![GitHub Settings](<images/04 github settings för chatgptåtkomst.png>)

Gå vidare till **Applications**.

![Applications](<images/05 github settings för chatgptåtkomst 2.png>)

Öppna inställningarna för ChatGPT/OpenAI-anslutningen.

![Installerade GitHub-appar](<images/06 github settings för chatgptåtkomst 3.png>)

GitHub kan i vissa lägen be dig bekräfta åtkomsten.

![Bekräfta åtkomst](<images/07 github settings för chatgptåtkomst 4.png>)

Under **Repository access** går det att välja vilka repositories ChatGPT ska få arbeta med.

![Repository access](<images/08 github settings för chatgptåtkomst 5.png>)

Lägg till eller ta bort repositories och spara.

![Valt repository](<images/09 github settings för chatgptåtkomst 6.png>)

---

## Vad visar exemplet?

Det viktiga är egentligen inte STL-visaren i sig. Samma arbetsflöde kan användas för många små idéer:

**Idé → samtal med ChatGPT → filer på GitHub → GitHub Pages → fungerande webbsida**

För enkla verktyg kan vanlig **HTML + CSS + JavaScript** räcka långt. Då behövs ingen server, inget lokalt program för användaren och inget separat webbhotell.

När projektet kräver mer — till exempel databas, autentisering, serverfunktioner eller hemliga API-nycklar — behöver man välja en annan arkitektur. Men för små webbaserade hjälpverktyg är GitHub Pages en mycket låg tröskel.

## Nästa gång du tänker…

> **Det vore praktiskt om…**

…kan det vara värt att beskriva idén för ChatGPT och se hur långt den går att ta.
