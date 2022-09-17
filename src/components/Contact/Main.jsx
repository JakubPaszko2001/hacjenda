import React from 'react'

const Main = () => {
  return (
    <div class='flex justify-center items-center w-screen h-[calc(100vh_-_30rem)] bg-white'>
        <div class='flex w-4/5 h-4/5 bg-green-500'>
            <div class='flex flex-col justify-around w-2/3 h-full pl-2 bg-yellow-500'>
                <h1 class='mt-12'>Mail: mpiatkowski3@o2.pl</h1>
                <h1>Numer telefonu: 693 720 887</h1>
                <h1 class='mb-12'>Miejscowosc: Jasionówka 19-122 ul.Korycińska 32</h1>
            </div>
            <div class='flex flex-col justify-between w-1/3 h-full p-4 bg-black'>
                <div class='h-1/4 w-1/2 bg-white'></div>
                <div class='h-1/4 w-1/2 bg-white translate-x-[100%]'></div>
                <div class='h-1/4 w-1/2 bg-white'></div>
            </div>
        </div>
    </div>
  )
}

export default Main