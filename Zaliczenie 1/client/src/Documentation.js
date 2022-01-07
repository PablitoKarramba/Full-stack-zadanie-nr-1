import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div>
      <h1> Full-stack-zadanie-nr-1 </h1> <br/>
      <h2> Zadanie zaliczeniowe na laboratorium z Programowania full-stack w chmurze obliczeniowej </h2>
      <i> Aplikacja na podstawie laboratorium 9. </i>
      <p>
      Przedmiotem zadania jest usługa wyliczająca wartość k-tego elementu ciągu Fibonacciego dla zadanej wartości k. W tym celu wykorzystałem kod, który przygotowałem na laboratorium 8: </p>
      <img src={"./4.png"}/> <br/>
      <img src={"./5.png"}/>

      <p> 
         <h2>Strony</h2>
         Użytkownik otrzymuje dostęp do 3 stron:
         <ul>
           <li><b>Strona główna</b> - informacja o celu strony i autorze<br/>
           <img src={"./2.png"}/>
           </li>
           <li><b>Kalkulator Fibonacciego</b> - należy podać element k w zakresie od 0 do 20, dla którego chcemy uzyskać wartość ciągu Fibonacciego. Rezultat pojawia się na liście pośród pozostałych wyliczonych wartości wyświetlanych z bazy danych. Historia pozwala odczytać ostatnie 10 współczynników wprowadzonych przez użytkownika.<br/>
           <img src={"./3.png"}/>
           </li>
           <li><b>Opis</b> - dokumentacja działania aplikacji</li>
          </ul>
        </p>

      <p>
        <h2>Uruchomienie aplikacji</h2>
        Po rozpakowaniu aplikacji i przejściu do katalogu projektu należy wykonać polecenie <code>docker-compose up</code>.
      </p>

      <p>
        <h2>Modyfikacje</h2>
        <ul>
          <li>
          dodano Home.js z treścią strony głównej
          </li>
          <li>
          poprawki Fib Calc.js, w którym
          <ul>
            <li>
            weryfikowana jest m.in. prawidłowa wartość elementu k
            </li>
            <li>
            wyświetlane są odpowiedzi serwera na akcje użytkownika
            </li>
          </ul>
          </li>
          <li>
          dodano Documentation.js z treścią dokumentacji dla podstrony Opis
          </li>
          <li>
          modyfikacja App.js do prawidłowej współpracy z nowymi podstronami
          </li>
          <li>
          index.js serwera, gdzie w bazie danych dodano kolumnę id w tabeli values; dostosowano zapytanie aby wyświetlać 10 ostatnich wartości i zabezpieczono przed dodaniem do bazy danych wartości spoza dopuszczalnego zakresu
          </li>
          <li>
          index.js workera - zmieniłem sposób obliczenia k-tego elementu ciągu Fibonacciego na zaproponowany przeze mnie w laboratorium 8
          </li>
          <li>
          style css
          </li>
        </ul>
      </p>
      <p>
      Zmiany w kodzie źródłowym mogą być wprowadzane do działającej usługi bez konieczności ponownego budowania obrazów.
      </p>
      
    </div>
  );
};
