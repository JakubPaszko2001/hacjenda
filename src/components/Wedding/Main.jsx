import React from "react";
import ciasto from "../../public/images/ciasto.webp";
const Main = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once
        class="flex flex-col justify-center lg:w-1/2 lg:h-[25rem] p-10"
      >
        <h1 class="font-title text-6xl mb-10">Wesela</h1>
        <h1 class="font-regular text-lg">
          Dzień, w którym odbywa się wesele, jest dla każdej pary młodej jednym
          z najważniejszych dni w życiu. Przygotowanie tak ważnej imprezy wymaga
          perfekcyjnej organizacji oraz zachowania niezwykłej staranności.
          Dokładamy wszelkich starań, aby podczas przyjęcia weselnego każdy z
          państwa gości czuł się wyjątkowo oraz wspominał państwa wesele przez
          długie lata. Obiekt Hacjenda znajduję się w malowniczej wsi. Wiele
          atrakcji oraz piękne otoczenie sprawi, że wasze wesele stanie się
          niezapomniane do końca życia.
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once
        class="h-[20rem] lg:w-1/3 lg:m-auto lg:h-[25rem] p-10"
      >
        <img
          class="w-full h-full object-cover object-bottom"
          src={ciasto}
          alt="ciasto"
        />
      </div>
    </div>
  );
};

export default Main;
