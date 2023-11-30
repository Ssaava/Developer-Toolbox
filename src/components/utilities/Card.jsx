const Card = () => {
  return (
    <div className="group/card h-72 p-4 mt-12 rounded relative bg-white cursor-pointer hover:bg-slate-100 transition dark:bg-gray-950 dark:text-white hover:dark:bg-gray-800">
      <div className="card-img bg-[url('/src/assets/JavaScript-logo.png')]  ">
        {/* <img src="../../../public/JavaScript-logo.png" alt="resource name" /> */}
      </div>
      <div className="group/info mt-7">
        <div className="mb-4 text-3xl text-[#2c3e50] dark:text-white font-primaryFont font-bold">
          Card title
        </div>
        <div className="text-base h-[125px] text-gray-300 group-hover/card:text-[#737476] font-textFont overflow-y-hidden transition">
          JavaScript (JS) is a lightweight interpreted (or just-in-time
          compiled) programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat.
        </div>
        <div className="more-btn text-[#737476] group-hover/card:text-blue-400">
          Read more
        </div>
      </div>
    </div>
  );
};

export default Card;
