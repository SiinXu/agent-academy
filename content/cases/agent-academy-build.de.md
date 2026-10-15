# Fall 1: Wie ein Agent diese Website entworfen hat

_Maschinelle Übersetzung (Argos Translate). Original: English._

Dies ist der erste Fall des Designkurses. Es zeichnet auf, wie die Agent Academy selbst entworfen wurde, Schritt für Schritt, so dass ein anderer Agent die Methode für sein eigenes Projekt wiederholen kann. Jede Referenz unten ist eine echte Datei im UI Resource Hub; nichts wurde erfunden.

![Vorher: die gleiche Seite ohne Stylesheet](/assets/case/before.webp)

![Nachher: Die versendete Homepage](/assets/case/after.webp)

## 1. Kurz
- Publikum: Leute, die einen Bot für einen Job auswählen, und die Agenten, die die Website lesen.
- Job der Homepage: Zeigen Sie, was drin ist (3 offene Fakultäten, echte Ressourcen, ein täglicher Feed) und übergeben Sie eine kopierbare Eingabeaufforderung.
- Einschränkungen: 10 Sprachen, hell und dunkel, lange Links dürfen nie überlaufen, eine Kartenpolsterung überall, ausgefallen, aber zurückhaltend, Ausweichmanöver mit reduzierter Bewegung.
- Banned Looks: Papier + Orange, Carbon Grau, Instrument + Kalk, die Tinte + Chrom-Look der Schwester-Site und der Mitternacht + Cyan-Look von UI Hub.

## 2. Cluster vor der Auswahl
Der Agent zählte jeden Tag im visuellen Stil im UI Hub `data.json` (2.376 lokale Artikel) anstatt von einem Favoriten zu beginnen:

| Cluster | Positionen | Urteil |
|---|---|---|
| minimal | 1031 | Körperdisziplin nur |
| Unternehmen | 805 | abgelehnt: Dashboard Look |
| Material | 326 | abgelehnt: System-Look |
| Bewegung | 152 | beibehalten: Bewegungsvokabular |
| Darktech | 102 | teilweise gehalten |
| Steigung / 3d | 78 / 67 | Nur als Einfarbkorn gehalten |
| Redaktion | 25 | gehalten: Bento-Index, dichtes Mauerwerk |

Ausgewählter Schnittpunkt: redaktionell x Bewegung x Gradient.

## 3. Reale Previews öffnen (27 Dateien)
Ein Hard Gate: kein CSS, bis mindestens 6 Previews geöffnet und geschrieben wurden. 27 wurden eröffnet, darunter `previews/site/tympanus-net-codrops.webp`, `previews/skiper-ui-com.webp`, `previews/ui-lukacho-com.webp`, `previews/rive-app.webp`, `previews/backgrounds-supply.webp`, `previews/rareui-com.webp`, `previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`, `previews/cs/cs2-magicui-design--background--shine-border--v0.webp` und `previews/cs/cs-ui-aceternity-com-card.webp`.

Für jedes gespeicherte Element erfassen die Notizen Bibliothek, Vorschaupfad, Hex, Radius, Schatten, Schriftarten und Bewegungstyp. Beispiel: Das Hero Line Feld kommt von Lukacho UI ()`previews/ui-lukacho-com.webp`), Haarstriche bei 10 bis 22 Prozent Tinte, driftet langsam mit nur Transformation.

## 4. Drei Richtungen, eine gewählt
| Option | gebaut aus | Ergebnis |
|---|---|---|
| A. Campus bento | Codrops bento, Skiper seal, Lukacho Linien, Magic UI orbit + shine border + marquet, Aceternity 3D Karte | **gewählt**: Das Fach (eine Schule mit Fakultäten) steuert das Layout; drei Fakultätsfarben plus Neutrale |
| B. Nachtbühne | Aceternity Spotlight, metallische Headline, Collage | abgelehnt: liest sich als Reskin der Schwesterseite, nur dunkel |
| C. Pixelanschluss | Cult UI Pixeltyp, Magic UI Haarlinienraster, CLI Streifen | abgelehnt: verwandelt das Haus in eine Form, Mono-Etiketten und Haarraster werden AI erzählt |

## 5. Token
- Leinwand `#ECECEF` / `#0D0D11`Fläche `#FFFFFF` / `#16161C`Tinte `#15151B` / `#F0F0F4`, gedämpft `#575764` / `#A3A3B2`, Link `#3340E6` / `#9AA3FF`.
- Fakultät Körner: Kundenservice `#3A47F5` bis `#0E3A44` (Codrops Cover), Marketing `#E0457B` bis `#3B0A22` (Hintergrundversorgung), Design `#FF5A1F` Blütenblätter `#17171A` (Rare UI)
- Typ: Archivo variabel 800 für das Ansehen (Breites Gratesk wie Codrops und Skiper), Geist für Körper, Geist Mono nur für echten Code.
- Radius nach Hierarchie: 14 / 8 / 6 / 999. Ein Kartenpolster-Token: 18px (16px auf Telefonen).

## 6. Antragshaushalt
Dichtungsrotation 48s, zwei Orbitringe 40s und 60s, Linienfelddrift 18s, konische Glanzgrenze auf Quick Start 7s, Festzelt 60s, das auf Schwebe und Fokus pausiert, eine Kurskette, die einmal durchgeht, wenn sie in Sicht gescrollt wird, und ein Vorher / Nachher-Slider mit einer 6-Grad-Neigung. Nur transformieren, Opazität und Hintergrundposition beleben. Alles stoppt unter `prefers-reduced-motion`und Offscreen-Loops durch IntersectionObserver anhalten.

## 7. Überprüfung
- 1440 und 390 breit, hell und dunkel, nach Überlauf, Unebenheit und Kontrast.
- Leuchtturm laufen auf den gebauten Seiten; Probleme behoben und erneut ausgeführt, bis die Ergebnisse gehalten.
- Jede Ressourcenkarte verbindet sich mit ihrer Quelle, jede Kursdatei ist eine rohe GitHub-URL, die auflöst.

## Diese Methode wiederverwenden
1. Schreiben Sie zuerst das kurze und das verbotene Aussehen.
2. Cluster in UI Hub zählen `api/resources.json` Bevor Sie einen Stil auswählen.
3. Öffnen Sie mindestens 6 Vorspeise- und Abschreibvorgänge, Hexen, Radius, Schatten, Schrift, Bewegung für jedes Element.
4. Skizzieren Sie drei Richtungen, wählen Sie eine und sagen Sie, warum die anderen beiden verloren haben.
5. Token, dann Komponenten, dann Bewegung; Überprüfen Sie reduzierte Bewegung.
6. Screenshot Desktop und Mobile in beiden Themes, Fix, Run Lighthouse, Repeat.
