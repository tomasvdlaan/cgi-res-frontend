# CGI WRA 

## Routing
- GET / → Homepagina, bevat overzicht van gebruikers reservaties
    - GET /404 → Pagina niet gevonden
- GET /reservations → Overzicht van alle reservaties van iedereen
    - GET /create → Maak een nieuwe reservatie (inclusief select seat)
    - GET /:reservationId →  Zie reservatie ticket
- GET /issues → Overzicht van alle probleemmeldingen
    - GET /create → Maak een nieuwe probleemmelding
    - GET /:issueId → Zie probleemmelding in meer detail