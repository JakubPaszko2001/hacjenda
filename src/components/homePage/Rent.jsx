import React from 'react'

const Rent = () => {
  return (
    <div className='w-screen'>
        <div class='flex justify-center align-center w-screen p-10 text-3xl'>
            <h1>Wynajem sali weselnej</h1>
        </div>
        <div class='flex flex-col lg:flex-row lg:w-screen lg:h-full lg:items-end'>
            <div class='w-4/5 m-auto bg-blue-500 pt-8 pb-8 pl-2 pr-2 text-2xl mb-4 lg:w-1/4'>
                <h1 class='pb-8'>Chrzciny</h1>
                <h1 class='pb-4'>Chrzest dziecka to wydarzenie, które zasługuję na wyjątkową oprawę.</h1>
                <h1>Przeżyjmy ten dzień wspólnie w Hacjendzie.</h1>
            </div>
            <div class='w-4/5 m-auto bg-blue-500 pt-8 pb-8 pl-2 pr-2 text-2xl mb-4 lg:w-1/4'>
                <h1 class='pb-8'>Wesela</h1>
                <h1 class='pb-4'>Każda Para Młoda pragnię, aby jej przyjęcie weselne było przeżyciem niezapomnianym dlatego organizację tego wyjątkowego wydarzenia rozpoczyna od wyboru idealnego miejsca na wesele. Takim miejscem jest nasza Hacjenda, do którego serdecznie Państwa zapraszamy.</h1>
                <h1>Odwiedź Hacjendę i zapoznaj się z naszą ofertą</h1>
            </div>
            <div class='w-4/5 m-auto bg-blue-500 pt-8 pb-8 pl-2 pr-2 text-2xl mb-4 lg:w-1/4'>
                <h1 class='pb-8'>Imprezy okolicznościowe</h1>
                <h1 class='pb-4'>Wszelkie imprezy okolicznościowe będą przeżyciem niezapomnianym takie jak komunie lub chrzest</h1>
            </div>
        </div>
    </div>
  )
}

export default Rent