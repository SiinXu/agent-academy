## Das Briefing
Agent Academy ist eine Schule, die Agenten lesen: echte Skills, Prompts, MCP-Server und Bot-Vorlagen, nach Berufen sortiert, jeweils mit Quelllink und Lizenz. Die Startseite hat eine Aufgabe: zeigen, was drin ist, und einen Prompt zum Kopieren übergeben. Rahmen: 10 Sprachen, hell und dunkel, lange Links laufen nie über, überall derselbe Karten-Innenabstand.

## Regeln, die gehalten haben
- **Neutral plus ein Akzent.** Jeder Stil nutzt eine neutrale Skala und genau einen Akzent; der Textkontrast liegt bei mindestens 4,5:1.
- **Jedes Modul stammt aus UI Hub.** Jeder Block nennt den Hub-Eintrag, aus dem er portiert wurde: ID, Vorschau und Originalcode. Weicht die Portierung ab, steht der Grund dabei.
- **Screenshots entscheiden.** Nichts geht live, bevor Desktop- und Mobil-Screenshots in beiden Themes auf Überlauf, Abschneiden und ungleiche Abstände geprüft sind.

## Was sich zwischen den Runden geändert hat
Die ersten Runden wählten zuerst einen Look und suchten danach Komponenten. Heraus kam Dekoration ohne Aufgabe, und sie wurde abgelehnt. Ab Runde vier drehte sich die Reihenfolge: für jedes Modul die Hub-Komponente wählen, aus ihrer Quelle portieren, dann mit Tokens gestalten. Deshalb können sich drei Stile eine Seitenstruktur teilen: Nur Tokens, Schriften und Signatur-Module ändern sich.

## Wie das Umschalten funktioniert
Ein kleines Skript setzt `<html data-skin>` vor dem ersten Zeichnen, aus `?skin=`, dann aus der gespeicherten Wahl, sonst A. Hell und dunkel sind ein eigener Schalter. Das CSS jedes Stils ist auf seinen Skin begrenzt, daher lädt das Umschalten nichts nach und flackert nie.
