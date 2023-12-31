import { Card, SearchInput } from "./utilities";
import dataFiles from "../../public/data/index.tsx";

import { useEffect, useState } from "react";

const Main = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const cardsArray = [];
    dataFiles.forEach(async (file) => {
      const response = await fetch(`/data/${file}`);
      const data = await response.json();

      data.forEach((language) => {
        cardsArray.push(
          <Card
            key={language.examples[0].name}
            details={language.examples[0].description}
            title={language.examples[0].name}
            icon={language.examples[0].icon}
            link={language.examples[0].link}
          />
        );
        console.log(language);
      });
      setCards(cardsArray);
    });
  }, []);

  return (
    <main className="tablet:w-[calc(100%-20rem)] tablet:ms-auto bg-stone-300 p-5 dark:bg-gray-900 outline-none">
      <h3 className="text-3xl font-primaryFont font-bold text-[#0F172A] dark:text-white">
        Content details
      </h3>
      <p className="rounded-lg bg-stone-400 w-100% h-[1px] my-7"></p>

      <SearchInput />
      <div className="pt-5 grid sm:grid-cols-2 gap-x-12">{cards}</div>
    </main>
  );
};

export default Main;
