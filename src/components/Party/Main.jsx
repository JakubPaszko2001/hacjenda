import React from 'react'
import patern from '../../public/images/patern2.png'
import komunia from '../../public/images/komunia.webp'
import chrzest from '../../public/images/chrzest.webp'
import grill from '../../public/images/grill.webp'
import przyjecia from '../Galery/Photos/w14.webp'
// import przyjecia from '../../public/images/szampan.webp'
const Main = () => {
  return (
    <div class='flex w-screen mt-8 mb-8'>
      <div class='w-1/5 bg-darkgreen bg-contain' style={{backgroundImage: `url(${patern})`}}></div>
      <div class='grid grid-col-1 w-4/5 lg:grid lg:grid-cols-2 gap-2 items-center'>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-4/5 h-[10rem] ml-auto mr-auto bg-cover bg-center md:h-[15rem]' style={{backgroundImage: `url(${komunia})`}}></div>
        <div data-aos="fade-up" data-aos-duration="2000" class='flex flex-col w-4/5  ml-auto mr-auto'>
          <h1 class='font-title text-3xl pt-2 pb-2'>Pierwsza komunia swieta</h1>
          <h1 class='font-regular pb-2'>Pierwsza Komunia Święta to wyjątkowo szczególny dzień w życiu każdego dziecka, oraz jego rodziców. To wspaniała okazja do spędzenia czasu w gronie rodziny i przyjaciół. Dołożymy wszelkich starań, aby ten dzień był szczególny i niezapomniany. Hacjenda to wymarzone miejsce na urządzenie przyjęcia komunijnego. Oferujemy wiele atrakcji zarówno dzieciom jak i dorosłym.</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='flex flex-col w-4/5  ml-auto mr-auto '>
          <h1 class='font-title text-3xl pt-2 pb-2'>Chrzest Swiety</h1>
          <h1 class='font-regular pb-2'>Chrzest Święty to wyjątkowe wydarzenie nie tylko dla dziecka, ale też dla jego rodziców i bliskich. To dlatego w Hacjendzie dbamy o każdy szczegół organizacji Chrzcin.Przygotowujemy wyśmienite potrawy i napoje, przystrajamy wnętrze, by wyglądało uroczyście i elegancko. Nasi pracownicy dokładają wszelkich starań, by dopasować każdy element imprezy do Państwa oczekiwań i potrzeb. Jesteśmy otwarci na wszelkie sugestie ze strony naszych klientów. Dbamy o to, by dzień chrztu był niezapomniany, pełen radości i uśmiechu. Zapraszamy do zapoznania się z naszą ofertą.</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-4/5 h-[10rem] row-start-3 ml-auto mr-auto bg-cover bg-center md:h-[15rem] row-start-5 lg:row-start-2 lg:col-start-2' style={{backgroundImage: `url(${grill})`}}></div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-4/5 h-[10rem] ml-auto mr-auto bg-cover bg-center md:h-[15rem] row-start-3' style={{backgroundImage: `url(${chrzest})`}}></div>
        <div data-aos="fade-up" data-aos-duration="2000" class='flex flex-col w-4/5  ml-auto mr-auto '>
          <h1 class='font-title text-3xl pt-2 pb-2'>Grill</h1>
          <h1 class='font-regular pb-2'>Szukasz idealnego miejsca na ognisko lub grilla, w którym mógłbyś się spotkać w gronie rodzinnym lub ze znajomymi?Hacjenda jest na to idealnym miejscem, z dala od miasta oraz z urodziwym terenem Tutejsze tereny na pewno wam się spodobają i na długo zostaną w waszej pamięci.Dlatego jeśli macie wolny weekend lub chcecie spędzićmiło czas z przyjaciółmi to zapraszamy właśnie do nas </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='flex flex-col w-4/5  ml-auto mr-auto '>
          <h1 class='font-title text-3xl pt-2 pb-2'>Przyjecia</h1>
          <h1 class='font-regular pb-2'>Oddajemy do państwa dyspozycji stylowe wnętrze, przestronną sale, która bez trudu pomieści do 250 osób. W Hacjendzie zaserwujemy państwu najsmaczniejsze dania naszej kuchni, przygotowane z myślą o tym wyjątkowym dniu, jakim jest <br/>- Impreza firmowa <br/>- Urodziny <br/>- Wieczór Panieński i Kawalerski <br/>- Bankiet <br/>- Impreza Integracyjna<br/> profesjonalna obsługa pozostanie do Państwa dyspozycji przez całe przyjęcie. Urokliwy i zielony teren wokół Hacjendy będzie idealnym miejscem na spokojne rozmowy i relaks w gronie bliskich oraz przyjaciół, a także beztroską zabawę dla najmłodszych.</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-4/5 h-[10rem] row-start-7 ml-auto mr-auto bg-cover bg-center md:h-[15rem] lg:row-start-4 lg:col-start-2' style={{backgroundImage: `url(${przyjecia})`}}></div>
      </div>
    </div>
  )
}
export default Main