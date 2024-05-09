##         STOCK FRESH ##
###### Studenta:  Grosu Teodora-Cătălina, SIMPRE ~ grupa 1132 
###### Link GitHub : https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing
###### Link aplicație publica : https://simpre-cloud-computing-4915nwlrt-teodoras-projects-37fcc608.vercel.app/
###### Link video prezentare YouTube : 

  ##  1. Introducere:
   Aplicația "Stock Fresh", dezvoltată pe platforma Next.js, este o soluție inovatoare pentru managerii și angajații magazinelor cu un sortiment extins de produse. În condițiile unui inventar vast, este foarte greu pentru comercianți să  gestioneze eficient stocurile și să verifice constant datele de expirare ale produselor. "Stock Fresh" vine în spijinul acestora, asigurând monitorizarea expirării produselor și optimizarea gestionării inventarului, facilitând astfel menținerea unui flux constant de produse în termen și disponibile pentru clienți, asigurând totodată și un proces de vânzare și gestionare al produselor cât mai fluent și mai precis.
  
  ## 2. Descrierea problemei: 
  Magazinele care oferă un inventar vast, în special produse perisabile, se confruntă frecvent cu provocări în gestionarea eficientă a stocurilor. Produsele expiră adesea neobservate, provocând pierderi financiare semnificative și afectând satisfacția clienților. În acest context, aplicația "Stock Fresh" aduce o soluție esențială, facilitând monitorizarea produselor perisabile, precum și a datelor de expirare și cantităților aferente fiecărui articol, alături de prețul acestora.
  Pentru a asigura o mai bună gestionare și evidență a muncii angajaților , "Stock Fresh" necesită autentificarea angajaților înainte de accesul în sistem, stocând adresele lor de e-mail și momentul logării. Această procedură este simplificată prin opțiunea de conectare prin contul personal de Google.
  Aplicația oferă, de asemenea, funcționalități flexibile pentru adăugarea de noi produse și editarea celor existente, facilitând actualizarea rapidă a inventarului când produsele nu mai corespund standardelor de valabilitate și trebuiesc scoase de la raft sau când acestea au fost vândute.
  
  ## 3. Descriere API:
     a) API Firebase Authentication
Firebase Authentication este un serviciu oferit de platforma Firebase, care facilitează gestionarea autentificării utilizatorilor în aplicații web și mobile. Acest API este extrem de util în aplicația, „Stock Fresh”, pentru că le permite utilizatorilor să se logheze într-un mod sigur și rapid. Logarea folosind contul personal de Google, permite angajaților companiei să acceseze rapid funcționalitățile platformei, fără a mai stă cu grijă parolei și a e-mail-ului. În plus, pentru a ține o evidență mai bună muncii angajaților, datele acestora, cât și momentul logarii au fost stocate.

     b) API de tip REST
Cu ajutorul API-ului de tip REST s-a facilitat comunicarea între frontend-ul aplicației și baza de date. Astfel, prin metodele HTTP ~ GET, POST, PUT și DELETE ~ este gestionat într-un mod cât mai eficient gama variată de produse din cadrul magazinului. Astfel, utilizatorii aplicației pot consulta stocurile actuale (GET), adăuga noi produse (POST), actualiza informații despre produsele existente (PUT), sau elimina produsele expirate sau vândute (DELETE).

  ## 4. Fluxul de date:
    ~ Exemplu de request/response + Metode HTTP
Aplicația 'Stock Fresh' implementează principalele tipuri de request-uri: GET ~ pentru a putea vizualiza gama de produse, PUT ~ pentru a actualiza produsele deja stocate la nivelul bazei de date, POST ~ pentru a introduce în sistem noi produse și DELETE ~ pentru a șterge produsele în cazul în care acestea nu se mai află deloc în cadrul magazinului.
### Metoda GET:
- Exemplu de request: http://localhost:3000/api/records/
- Exemplu de response: 	{
			                    "_id": "663cb8d1774e97a09407ef2c",
			                    "denumire": "Bomboane Ferrero Rocher 375g",
			                    "categorie": "Ciocolata",
			                    "date_expirare": "2 produse ~ 10.04.2026",
			                    "pret": "30 lei",
		          	          "link_imagine": "https://cdn.farulmarketplace.ro/fit-in/800x1500/filters:no_upscale()/image/catalog/products/auchan/bacanie-3/a3n283785/a3n283785.jpg"}
		          
                         
 ![Kazam_screenshot_00004](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/ca6b4348-43c1-4e4f-9c80-4ef8e9fb8b25)
  
## Metoda POST:
- Exemplu de request: http://localhost:3000/api/records/ 
- Exemplu de response: {
	                      "data": {
		                    "acknowledged": true,
		                    "insertedId": "663cefa7b94aa97fd058d745" }
                        }
  

    ![Kazam_screenshot_00000](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/57159884-4116-4670-911a-e82f9157b202)

## Metoda PUT:
- Exemplu de request: http://localhost:3000/api/records/ 
- Exemplu de response: { "data": {
		                        "acknowledged": true,
		                        "modifiedCount": 1,
		                        "upsertedId": null,
	                        	"upsertedCount": 0,
		                        "matchedCount": 1 }
                       }
  
  ![Kazam_screenshot_00002](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/6eb115af-1e8e-424d-8245-fdfcd1093e77)

## Metoda DELETE:
- Exemplu de request: http://localhost:3000/api/records/?id=663cefa7b94aa97fd058d745 
- Exemplu de response: {
	                      "data": {
		                    "acknowledged": true,
		                    "deletedCount": 1}
                        }

![Kazam_screenshot_00003](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/265d7596-931f-4ff4-a612-61fa76b2e0c2)

    ~ Autentificare și autorizare
  Pentru a putea utiliza serviciile MongoDB a fost necesară crearea unui utilizator și a unei parole pentru a permite autentificarea în baza de date. De asemenea, pentru că aplicația să poată fi pusă pe Vercel am configurat drepturile de acces din MongoDB pentru a permite oricărei adrese IP să acceseze site-ul web.
  Folosirea Firebase Authentication a presupun, de asemenea, crearea unui cont și a unui proiect unde vor fi stocate toate datele despre utilizatorii care se vor conecta cu contul personal de Google la aplicația 'Stock Fresh'.
  În plus, că și măsuri de securitate fișierul .env al proiectul care stochează cheile de conectare la baza de date a fost trecut în fișierul de gitignore pentru a nu se încarcă pe GitHub. În cadrum platformei Vercel, în secțiunea de Environment Variables, au fost configurate variabilele de mediu privind conectarea la baza de date.

  ## 5. Capturi de ecran:
   ###  Ecranul de pornire ~ Pagina de autentificare:
     - Conectarea folosind contul personal de Google
     
  ![Kazam_screenshot_00005](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/de5a6e33-98fb-496b-a777-38e39853bc22)

  ###   Ecranul principal(Main Page) ~ Gestionare produse 
    - Vizualizare produse existente
    - Filtrarea produselor în funcție de categoria de produs din care se încadrează
    - Ștergerea produselor care nu se mai află în stocul magazinului
    - Trimitere către pagină în care se pot adaugă noi produse
    - Iconiță ce face trimitere către pagină de editare produs
![Kazam_screenshot_00006](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/8a99dc44-8c68-4521-8a85-ece411cb32e6)
~ Optiunea de filtrarea a produselor existente în funcție de categorie
![Kazam_screenshot_00007](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/1ad1165e-d78c-4a78-9b9e-254e121dba3d)

   ###   Ecranul adaugare produs nou ~ Adaugare produs nou
     - Pentru ca un produs sa poata sa fie înregistrat în baza de date trebuiesc completate câmpurile prezentate în
     imagine, cu excepția celui referitor la imagine, această nefiind obligatorie. 
  ![Kazam_screenshot_00009](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/8dfb0c68-55bb-4433-a2ab-71d749699ce1)

  ###    Ecranul editare produs existent ~ Produsele existente pot fi modificate
    - În cazul în care prețul produselor s-a modificat sau ceva din secțiunea dedicată termenelor de valabilitate
    ale produselor și cantitățile corespunzătoare s-au modificat, utilizatorii pot să actualizeze informațiile.
  
![Kazam_screenshot_00010](https://github.com/TheodoraGrosu/SIMPRE-Cloud-Computing/assets/115993520/5be63b18-ea46-43a6-aca8-ebb53af18262)


## Concluzii:
Proiectul "Stock Fresh" are ca scop eficientizarea și optimizarea gestionării inventarului pentru magazine, minimizând pierderile și îmbunătățind satisfacția clienților. Cu ajutorul tehnologiei moderne și a unei interfețe intuitive, aplicația oferă soluții agile și accesibile, indicând o direcție promițătoare pentru viitoarele dezvoltări ale platformei.

## 6. Referinte:
- https://www.mongodb.com/what-is-mongodb
- https://www.techtarget.com/searchcloudcomputing/definition/Software-as-a-Service
- https://v2.tailwindcss.com/docs
- https://lungu-mihai-adrian.gitbook.io/cloud-computing-2024-simpre/cerinte-proiect
- https://nextjs.org/docs
- https://firebase.google.com/docs/build

 ###  Servicii în Cloud utilizate la nivelul proiectului:
 1. MongoDB - baza de date NoSQL în care au fost stocate informații cu privire la produse(denumire, categorie, date expirare alături de cantitățile de produse, preț și un link către imaginea corespunzătoare);
 2. Vercel - deploymentul aplicației realizate;
 3. Firebase - conectarea folosind conturile personale de Google.



