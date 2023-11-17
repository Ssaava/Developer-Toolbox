import { Card, SearchInput } from "./utilities";
const Main = () => {
  return (
    <main className="tablet:w-[calc(100%-20rem)] tablet:ms-auto bg-stone-300 p-5">
      <h3 className="text-3xl">Content details</h3>
      <p className="rounded-lg bg-stone-400 w-100% h-[1px] my-7"></p>
      {/* //search input */}
      <SearchInput />
      <div className="pt-5 grid sm:grid-cols-2 gap-x-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;