# Full-stack-zadanie-nr-1
## Zadanie zaliczeniowe na laboratorium z Programowania full-stack w chmurze obliczeniowej

_Aplikacja na podstawie laboratorium 9._

Przedmiotem zadania jest usługa wyliczająca wartość k-tego elementu ciągu Fibonacciego dla zadanej wartości k. W tym celu wykorzystałem kod, który przygotowałem na laboratorium 8:
```
function fib(n) {
  if (n <= 0) {
    return 0;
  }
  else if (n == 1) {
    return 1;
  }
  else{
    let poprzedzajaca = 1;
    let obecna = 1;
    for(let i=2;i<n;i++){
      const nastepna = poprzedzajaca + obecna;
      poprzedzajaca = obecna;
      obecna = nastepna;
    }
    return obecna;
  }
}
```
## Strony

Użytkownik otrzymuje dostęp do 3 stron:
- **Strona główna** - informacja o celu strony i autorze
![2](https://user-images.githubusercontent.com/73346905/148541702-5c467c1c-b259-4284-ac4c-127d2f13ac34.png)
- **Kalkulator Fibonacciego** - należy podać element k w zakresie <0;20>, dla którego chcemy uzyskać wartość ciągu Fibonacciego. Rezultat pojawia się na liście pośród pozostałych wyliczonych wartości wyświetlanych z bazy danych. Historia pozwala odczytać ostatnie 10 współczynników wprowadzonych przez użytkownika.
![3](https://user-images.githubusercontent.com/73346905/148541735-b52022b0-a5d7-4fe0-9899-2796d57aa60d.png)
- **Opis** - dokumentacja działania aplikacji

## Uruchomienie aplikacji

Po rozpakowaniu aplikacji i przejściu do katalogu projektu należy wykonać polecenie `docker-compose up`.

## Modyfikacje

- dodano Home.js z treścią strony głównej
- poprawki Fib Calc.js, w którym 
  - weryfikowana jest m.in. prawidłowa wartość elementu k
  - wyświetlane są odpowiedzi serwera na akcje użytkownika
- dodano Documentation.js z treścią dokumentacji dla podstrony Opis
- modyfikacja App.js do prawidłowej współpracy z nowymi podstronami
- index.js serwera, gdzie w bazie danych dodano kolumnę id w tabeli _values_; dostosowano zapytanie aby wyświetlać 10 ostatnich wartości i zabezpieczono przed dodaniem do bazy danych wartości spoza dopuszczalnego zakresu
- index.js workera - zmieniłem sposób obliczenia k-tego elementu ciągu Fibonacciego na zaproponowany przeze mnie w laboratorium 8
- style css

Zmiany w kodzie źródłowym mogą być wprowadzane do działającej usługi bez konieczności ponownego budowania obrazów.
