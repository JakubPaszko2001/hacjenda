import React from 'react'
import patern from '../../public/images/patern2.png'
import szampan from '../../public/images/szampan.jpg'
const Main = () => {
  return (
    <div class='w-screen'>
      <div class='w-11/12 m-auto mt-20 mb-20'>
        <div class='flex w-full h-full bg-darkgreen'>
          <div class='w-1/6 bg-contain hidden' style={{backgroundImage: `url(${patern})`}}></div>
          <div class='flex flex-col w-full h-full'>
            <div class='flex flex-col text-white p-4 text-gold max-w-[25rem] max-h-[15.6rem]'>
              <h1 class='font-title text-4xl'>Pierwsza komunia swieta</h1>
              <h1>Pierwsza Komunia Święta to wyjątkowo szczególny dzień w życiu każdego dziecka, oraz jego rodziców. To wspaniała okazja do spędzenia czasu w gronie rodziny i przyjaciół. Dołożymy wszelkich starań, aby ten dzień był szczególny i niezapomniany. Hacjenda to wymarzone miejsce na urządzenie przyjęcia komunijnego. Oferujemy wiele atrakcji zarówno dzieciom jak i dorosłym.</h1>
            </div>
            <div class='w-full h-[60vw] max-w-[25rem] max-h-[15.6rem] p-4'>
              <div class='w-full h-full bg-blue-500 bg-cover' style={{backgroundImage: `url(${szampan})`}}></div>
            </div>
            <div class='flex flex-col text-white p-4 text-gold'>
              <h1 class='font-title text-4xl'>Chrzest swiety</h1>
              <h1>Chrzest Święty to wyjątkowe wydarzenie nie tylko dla dziecka, ale też dla jego rodziców i bliskich. To dlatego w Hacjendzie dbamy o każdy szczegół organizacji Chrzcin.Przygotowujemy wyśmienite potrawy i napoje, przystrajamy wnętrze, by wyglądało uroczyście i elegancko. Nasi pracownicy dokładają wszelkich starań, by dopasować każdy element imprezy do Państwa oczekiwań i potrzeb. Jesteśmy otwarci na wszelkie sugestie ze strony naszych klientów. Dbamy o to, by dzień chrztu był niezapomniany, pełen radości i uśmiechu. Zapraszamy do zapoznania się z naszą ofertą.</h1>
            </div>
            <div class='w-full h-[60vw] p-4'>
              <div class='w-full h-full bg-blue-500 bg-cover' style={{backgroundImage: `url(${szampan})`}}></div>
            </div>
            <div class='flex flex-col text-white p-4 text-gold'>
              <h1 class='font-title text-4xl'>Grill</h1>
              <h1>Szukasz idealnego miejsca na ognisko lub grilla, w którym mógłbyś się spotkać w gronie rodzinnym lub ze znajomymi?Hacjenda jest na to idealnym miejscem, z dala od miasta oraz z urodziwym terenem Tutejsze tereny na pewno wam się spodobają i na długo zostaną w waszej pamięci.Dlatego jeśli macie wolny weekend lub chcecie spędzić miło czas z przyjaciółmi to zapraszamy właśnie do nas </h1>
            </div>
            <div class='w-full h-[60vw] p-4'>
              <div class='w-full h-full bg-blue-500 bg-cover' style={{backgroundImage: `url(${szampan})`}}></div>
            </div>
            <div class='flex flex-col text-white p-4 text-gold'>
              <h1 class='font-title text-4xl'>Przyjecia</h1>
              <h1>Oddajemy do państwa dyspozycji stylowe wnętrze, przestronną sale, która bez trudu pomieści do 250 osób. W Hacjendzie zaserwujemy państwu najsmaczniejsze dania naszej kuchni, przygotowane z myślą o tym wyjątkowym dniu, jakim jest- Impreza firmowa- Urodziny- Wieczór Panieński i Kawalerski- Bankiet- Impreza Integracyjnaa profesjonalna obsługa pozostanie do Państwa dyspozycji przez całe przyjęcie. Urokliwy i zielony teren wokół Hacjendy będzie idealnym miejscem na spokojne rozmowy i relaks w gronie bliskich oraz przyjaciół, a także beztroską zabawę dla najmłodszych.</h1>
            </div>
            <div class='w-full h-[60vw] p-4'>
              <div class='w-full h-full bg-blue-500 bg-cover' style={{backgroundImage: `url(${szampan})`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main