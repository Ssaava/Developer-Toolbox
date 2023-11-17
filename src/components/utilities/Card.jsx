const Card = () => {
  return (
    <div className="group/card h-72 p-4 mt-12 rounded relative bg-white cursor-pointer">
      <div className="card-img bg-[url('../../../public/JavaScript-logo.png')]  ">
        {/* <img src="../../../public/JavaScript-logo.png" alt="resource name" /> */}
      </div>
      <div className="group/info mt-7">
        <div className="mb-4 text-3xl text-[#2c3e50] font-primaryFont font-bold">
          Card title
        </div>
        <div className="text-base h-[125px] text-[#0F172A] font-textFont overflow-y-hidden">
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
