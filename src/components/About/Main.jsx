import React from 'react'
import smak from '../../public/images/smak.jpg'
import tradycja from '../../public/images/tradycja.jpg'
import lowisko from '../../public/images/lowisko.jpg'
const Main = () => {
  return (
    <div class='w-screen lg:mt-20'>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={smak} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Urzadzamy przyjecia ze smakiem</h1>
                    <h1 class='font-regular'>Pośród otaczającej nas zwykłej codzienności szukamy chwil, które są  niezwykłe. Kiedy czas się zatrzymuje i nie płynie zwyczajnie. To chwile pełne podekscytowaniam oczekiwania, kiedy wszystko może się wydarzyć... My, Polacy uwielbiamy świętować. Spotykać się przy zastawionym stole, kiedy stoły uginają się od pysznych potraw. To nasza tradycja - pełne ciepła i życzliwości spotkania.</h1>
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
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Urzadzamy przyjecia ze smakiem</h1>
                    <h1 class='font-regular'>Pośród otaczającej nas zwykłej codzienności szukamy chwil, które są  niezwykłe. Kiedy czas się zatrzymuje i nie płynie zwyczajnie. To chwile pełne podekscytowaniam oczekiwania, kiedy wszystko może się wydarzyć... My, Polacy uwielbiamy świętować. Spotykać się przy zastawionym stole, kiedy stoły uginają się od pysznych potraw. To nasza tradycja - pełne ciepła i życzliwości spotkania.</h1>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={lowisko} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Urządzamy przyjęcia ze smakiem</h1>
                    <h1 class='font-regular'>Pośród otaczającej nas zwykłej codzienności szukamy chwil, które są  niezwykłe. Kiedy czas się zatrzymuje i nie płynie zwyczajnie. To chwile pełne podekscytowaniam oczekiwania, kiedy wszystko może się wydarzyć... My, Polacy uwielbiamy świętować. Spotykać się przy zastawionym stole, kiedy stoły uginają się od pysznych potraw. To nasza tradycja - pełne ciepła i życzliwości spotkania.</h1>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class='w-screen flex flex-col-reverse lg:flex-row-reverse'>
            <div class='flex justify-center items-center w-screen h-96 lg:w-1/2'>
                <div class='w-full h-full max-w-[40rem]'>
                    <img src={smak} alt='smak' class='object-cover h-full w-full'/>
                </div>
            </div>
            <div class='w-screen flex items-center justify-center lg:flex-col lg:w-1/2 p-10'>
                <div class='flex flex-col justify-center w-full h-full max-w-[40rem]'>
                    <h1 class='pb-10 text-3xl lg:text-5xl font-title'>Urządzamy przyjęcia ze smakiem</h1>
                    <h1 class='font-regular'>Pośród otaczającej nas zwykłej codzienności szukamy chwil, które są  niezwykłe. Kiedy czas się zatrzymuje i nie płynie zwyczajnie. To chwile pełne podekscytowaniam oczekiwania, kiedy wszystko może się wydarzyć... My, Polacy uwielbiamy świętować. Spotykać się przy zastawionym stole, kiedy stoły uginają się od pysznych potraw. To nasza tradycja - pełne ciepła i życzliwości spotkania.</h1>
                </div>
            </div>
        </div>
        <div class='flex justify-center items-center w-screen h-80 text-black lg:mt-20 lg:mb-10'>
            <div class='w-full h-full lg:w-1/3'>
            <iframe class='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.97240699099!2d23.041832815840408!3d53.397433479989715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e017062690d88b%3A0xf3e471365278c21a!2sSala%20bankietowa%20Hacjenda%20-%20Kompleks%20restauracyjno-wypoczynkowy!5e0!3m2!1spl!2spl!4v1663666981997!5m2!1spl!2spl" title="myFrame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Main