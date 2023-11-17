const Card = () => {
  return (
    <div className="group/card h-72 p-4 mt-12 rounded relative bg-white cursor-pointer">
      <div className="w-16 h-16 absolute left-4 -top-8 rounded-md bg-black ">
        <img src="../../../public/JavaScript-logo.png" alt="resource name" />
      </div>
      <div className="group/info mt-7">
        <div className="mb-5 text-3xl">Card title</div>
        <div className="text-lg h-[125px]  overflow-y-hidden">
          JavaScript (JS) is a lightweight interpreted (or just-in-time
          compiled) programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat.
        </div>
        <div className="more-btn">Read more</div>
      </div>
    </div>
  );
};

export default Card;
