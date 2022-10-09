import React from 'react'
import chrzest from '../../public/images/chrzest.webp'
import grill from '../../public/images/grill.webp'
import komunia from '../../public/images/komunia.webp'
import tradycja from '../Galery/Photos/w14.webp'
const Main = () => {
  return (
    <div class='w-screen lg:mt-20'>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={komunia} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Pierwsza komunia swieta</h1>
                    <h1 class='font-regular'>Pierwsza Komunia Święta to wyjątkowo szczególny dzień w życiu każdego dziecka oraz jego rodziców. To wspaniała okazja do spędzenia czasu w gronie rodziny i przyjaciół. Dołożymy wszelkich starań, aby ten dzień był szczególny i niezapomniany. Hacjenda to wymarzone miejsce na urządzenie przyjęcia komunijnego. Oferujemy wiele atrakcji zarówno dzieciom, jak i dorosłym.</h1>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row-reverse'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={chrzest} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Chrzest Swiety</h1>
                    <h1 class='font-regular'>Chrzest Święty to wyjątkowe wydarzenie nie tylko dla dziecka, ale też dla jego rodziców i bliskich. To dlatego w Hacjendzie dbamy o każdy szczegół organizacji Chrzcin. Przygotowujemy wyśmienite potrawy i napoje, przystrajamy wnętrze, by wyglądało uroczyście i elegancko. Nasi pracownicy dokładają wszelkich starań, by dopasować każdy element imprezy do Państwa oczekiwań i potrzeb. Jesteśmy otwarci na wszelkie sugestie ze strony naszych klientów. Dbamy o to, by dzień chrztu był niezapomniany, pełen radości i uśmiechu. Zapraszamy do zapoznania się z naszą ofertą.</h1>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={grill} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Grill</h1>
                    <h1 class='font-regular'>Szukasz idealnego miejsca na ognisko lub grilla, w którym mógłbyś się spotkać w gronie rodzinnym lub ze znajomymi? Hacjenda jest na to idealnym miejscem, z dala od miasta oraz z urodziwym terenem Tutejsze tereny na pewno wam się spodobają i na długo zostaną w waszej pamięci. Dlatego, jeśli macie wolny weekend lub chcecie spędzić miło czas z przyjaciółmi, to zapraszamy właśnie do nas.</h1>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row-reverse'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={tradycja} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Przyjecia</h1>
                    <h1 class='font-regular'>Oddajemy do państwa dyspozycji stylowe wnętrze, przestronną salę, która bez trudu pomieści do 250 osób. W Hacjendzie zaserwujemy państwu najsmaczniejsze dania naszej kuchni, przygotowane z myślą o tym wyjątkowym dniu, jakim jest:<br/>- Impreza firmowa<br/>- Urodziny<br/>- Wieczór Panieński i Kawalerski<br/>- Bankiet<br/>- Impreza Integracyjna<br/>profesjonalna obsługa pozostanie do Państwa dyspozycji przez całe przyjęcie. Urokliwy i zielony teren wokół Hacjendy będzie idealnym miejscem na spokojne rozmowy i relaks w gronie bliskich oraz przyjaciół, a także beztroską zabawę dla najmłodszych.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main