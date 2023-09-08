Workshop - React Forum POC (Proof of Concept)
 

Din uppgift är att skapa ett forum som innehåller inlägg, kommentarer och användare. Alla dessa ska hämtas från följande API-endpoints:

Inlägg: https://jsonplaceholder.typicode.com/posts

Kommentarer: https://jsonplaceholder.typicode.com/comments

Användare:  https://jsonplaceholder.typicode.com/users

 

/ (startsidan)

 

Användaren ska se samtliga inlägg - skriv endast ut titel för inläggen.

När man klickar på titeln för ett inlägg ska användaren navigera till en ny sida med URL:en /post/:id .

 

/post/:postId

 

Här ska användaren kunna se inläggets titel och textinnehåll. Det ska även stå användarnamn för personen som skapat vald post (du hittar denna information från /users-endpointen). Användarnamnet ska vara klickbart, och ta användaren till routen /user/:id .

Skriv även ut samtliga kommentarer som gjorts i detta inlägg. Varje kommentar ska innehålla dess textinnehåll, samt namn och mail på personen som kommenterat.

Det ska även finnas en tillbaka-knapp för att gå tillbaka till startsidan. 

Extra: Försök att åstadkomma att inget API-anrop görs på nytt när användaren klickar på tillbaka-knappen.

Extra: Om användaren navigerar sig från startsidan, ska INTE data för denna post hämtas en gång till (kommentarer får dock hämtas).

 

/profile/:userId

Här ska användaren kunna se information om en användare med valt userId. Skriv ut följande information

Användarnamn

Email

Stad

Namn på företaget hen jobbar

 

Lycka till!