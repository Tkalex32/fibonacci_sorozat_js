# fibonacci_sorozat_js

#### Feladat:
A Fibonacci sorozat n. elemének értékét adja vissza a függvény.

#### Mi a Fibonacci sorozat?
Olyan sorozat, melynek az első eleme 0 (alapesetben, lehet más is, ahogy a példában is 1 az első elem és a második), második eleme 1 és a további elemeket az előző kettő összegeként kapjuk meg. (1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

#### Elmélet
Az n. elem értéke tehát az előző kettő elem összegével egyenlő. n = (n-1) + (n-2)
Csak hogy nem ismert a megelőző két szám értéke sem, így először azokat kell kiszámolni. 

#### Megoldás
Rekurzió. A függvény meghívja önmagát, keresve a kisebb számok értékét, amíg el nem éri a sorozat elejét. Ez a sorozat első néhány elemén jól működik, azonban ha a sorozatban hátrébb álló helyre vagyunk kiváncsiak, nagyon sok számolásba kerül mire az eredményt megkapjuk, mivel a kód minden egyes értéket kiszámol. Az 50. elem kiszámolása pl. már perceket vesz igénybe. (2 ^ 50 - szer kell számolni, ami 1 125 899 906 842 624.)

![pic](https://i.ibb.co/KG1W3xc/image.png)

Az ábrán látható, hogy számolja ki a 7. elem értékét. A 7. elem a 6. és az 5. összege lesz. A 6. az 5. és a 4. összege és így tovább. A sárga körök a 3. elemnél végzett számolást jelölik (a 2. és az 1. elem összege, ugye). Látható, hogy többször is megtalálhatóak, de ezen kívűl a 4- és 5. elem is többször van kiszámolva.

#### Végleges megoldás
Hogy gyorsítsuk a számolási folyamatot, a már kiszámolt elemeket eltároljuk és ha újra ezt kellene számolnia, csak kiveszi az értéket a tárolóból.
