# Det vore praktiskt om…

## Från idé till fungerande webbsida med ChatGPT och GitHub Pages

Det här är en steg-för-steg-handout som visar ett enkelt sätt att gå från en idé till en publicerad webbsida.

Exemplet som byggs på slutet är medvetet litet:

> **Det vore praktiskt om man kunde vrida och vända på 3D-modeller.**

Vi skapar därför en enkel STL-visare som körs direkt i webbläsaren. Ingen lokal installation behövs för den som använder sidan, och själva STL-filen stannar i webbläsaren.

Den färdiga sidan finns på:

**https://morgansundsvallmakers.github.io/det-vore-praktiskt-om/**

---

## 0. Skapa konton och koppla ChatGPT till GitHub

Innan du börjar behöver du ett konto på både **ChatGPT** och **GitHub**.

1. Skapa en användare på **ChatGPT**.
2. Skapa en användare på **GitHub**.
3. I ChatGPT öppnar du **Pluginer** och söker efter **GitHub**.
4. Lägg till GitHub som plugin och anslut den till ditt GitHub-konto.
5. När anslutningen är klar kan du senare välja vilka repositories ChatGPT ska få åtkomst till.

Om du vill hålla experiment och småprojekt åtskilda från privata konton kan du använda ett separat e-postkonto för tjänsterna.

![Hitta GitHub-pluginen i ChatGPT](<images/00 ChatGPT plugin inställning.png>)

## 1. Skapa ett nytt repository på GitHub

Börja på GitHub och välj **New repository**.

![Skapa nytt repository](<images/01 skapa nytt repo på github.png>)

Ge repot ett namn och en kort beskrivning. Det är praktiskt att låta GitHub skapa en README-fil direkt.

![Inställningar för nytt repository](<images/02 skapa nytt repo på github steg 2.png>)

I det här exemplet heter repot `det-vore-praktiskt-om`.

![Namn och beskrivning](<images/03 skapa nytt repo på github steg 2b.png>)

---

## 2. Ge ChatGPT åtkomst till repot

Om GitHub redan är anslutet till ChatGPT kan man styra vilka repositories anslutningen får komma åt.

Öppna GitHubs kontoinställningar via profilikonen och **Settings**.

![GitHub Settings](<images/04 github settings för chatgptåtkomst.png>)

Gå vidare till **Applications**.

![Applications](<images/05 github settings för chatgptåtkomst 2.png>)

Öppna inställningarna för ChatGPT/OpenAI-anslutningen.

![Installerade GitHub-appar](<images/06 github settings för chatgptåtkomst 3.png>)

GitHub kan i vissa lägen be dig bekräfta åtkomsten.

![Bekräfta åtkomst](<images/07 github settings för chatgptåtkomst 4.png>)

Under **Repository access** går det att välja endast de repositories som ChatGPT ska få arbeta med.

![Repository access](<images/08 github settings för chatgptåtkomst 5.png>)

Lägg till det nya repot och spara.

![Valt repository](<images/09 github settings för chatgptåtkomst 6.png>)

---

## 3. Gör repot publikt om GitHub Pages ska användas gratis

Jag skapade först repot privat och ändrade det sedan till publikt. Hade det varit publikt från början hade det här steget kunnat hoppas över.

Under **Settings → General → Danger Zone** går det att ändra repositoryts synlighet.

![Ändra repository visibility](<images/10 skapa nytt repo på github steg 2b rättar.png>)

> **Tänk på:** ett publikt repo är synligt för alla. Lägg aldrig lösenord, API-nycklar, tokens eller annan känslig information i repot.

---

## 4. Aktivera GitHub Pages

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

## 5. Börja med behovet – inte tekniken

Nu kan man beskriva det man vill göra för ChatGPT.

I det här fallet började idén så här:

> **Det vore praktiskt om man kan vrida och vända på 3D-modeller.**

![Idén om en STL-visare](<images/15 det vore praktiskt om man kan vrida och vända på 3D-modeller.png>)

ChatGPT kan hjälpa till att resonera om vad som behövs. För en enkel STL-visare räcker vanlig webbteknik tillsammans med Three.js, STLLoader och OrbitControls.

![Planering av lösningen](<images/16 planering.png>)

---

## 6. Be ChatGPT bygga den första versionen

Prompten behöver inte vara särskilt teknisk. Den här räckte:

> **Gör en enkel webbsida där jag kan välja en STL-fil och sedan vrida, zooma och panorera modellen. Allt ska köras lokalt i webbläsaren och kunna publiceras på GitHub Pages. Om det är lämpligt, välj en ljuslila bakgrund.**

![Prompten](<images/17 prompt.png>)

Eftersom ChatGPT har åtkomst till repot kan det skapa filerna direkt där.

I det här fallet blev det tre vanliga webbfiler:

- `index.html`
- `style.css`
- `app.js`

![Filer skapade i repot](<images/18 filer i repot.png>)

---

## 7. Öppna den färdiga sidan

När filerna ligger på `main` publicerar GitHub Pages sidan automatiskt.

Resultatet blev en STL-visare där man kan välja en lokal STL-fil och sedan vrida, zooma och panorera modellen direkt i webbläsaren.

![Den färdiga STL-visaren](<images/19 resultatet.png>)

---

## Vad visar exemplet?

Det viktiga är egentligen inte STL-visaren i sig. Samma arbetsflöde kan användas för många små idéer:

**Idé → samtal med ChatGPT → filer på GitHub → GitHub Pages → fungerande webbsida**

För enkla verktyg kan vanlig **HTML + CSS + JavaScript** räcka långt. Då behövs ingen server, inget lokalt program för användaren och inget separat webbhotell.

När projektet kräver mer — till exempel databas, autentisering, serverfunktioner eller hemliga API-nycklar — behöver man välja en annan arkitektur. Men för små webbaserade hjälpverktyg är GitHub Pages en mycket låg tröskel.

## Nästa gång du tänker…

> **Det vore praktiskt om…**

…kan det vara värt att beskriva idén för ChatGPT och se hur långt den går att ta.
