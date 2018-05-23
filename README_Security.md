Online pagina  => https://yannid.github.io/project-PWA/

Doordat ik geen back-end heb in mijn applicatie kan ik deze headers niet toevoegen. 

Security headers

clickjacken => geen server maar kan wel met deze header : Content-Security-Policy: frame-ancestors 'none';
							  Content-Security-Policy: frame-src https://yannid.github.io/project-PWA/
							  Content-Security-Policy: child-src https://yannid.github.io/project-PWA/

httpsstrict tranport => Github doet dit automatisch bij het hosten maar als je zelf een server hebt voeg je deze header toe : Strict-Transport-Security: max-age=86400; includeSubDomains

xxs protection => er wordt nooit userinput naar de server gestuurd. Javascript doet berekent alles lokaal. Als je een php server hebt moet je deze header gebruiken : header("X-XSS-Protection: 1; mode=block");

refferer policy => heb ik niet nodig want dat houdt csrf tegen maar dat is niet mogelijk op mijn website omdat het static is zonder interactie met een webserver : Referrrer-Policy: origin-when-cross-origin

CONTENT SECURITY POLICY  => Content-Security-Policy: default-src 'self'