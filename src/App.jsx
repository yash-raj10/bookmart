import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    {
      title: "HP and sorcerer's stone",
      image:
        "https://m.media-amazon.com/images/I/91ocU8970hL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },

    {
      title: "Haunting Adeline",
      image:
        "https://m.media-amazon.com/images/I/71W5-2NdNsL._AC_UF894,1000_QL80_.jpg",
      price: "500",
    },

    {
      title: "Gone Girl",
      image:
        "https://m.media-amazon.com/images/I/71NV0obX14L._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Diary of a wimpy kid",
      image:
        "https://m.media-amazon.com/images/I/81vrUdusP0L._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Geronimo stilton",
      image:
        "https://m.media-amazon.com/images/I/81sJs5Ec0RL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "HP and deathly hollows",
      image:
        "https://m.media-amazon.com/images/I/71sH3vxziLL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Panchtantra",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/book/3/8/3/panchtantra-ki-32-kahaniyan-in-hindi-original-imaeauyhkyrtxggz.jpeg?q=90&crop=false",
      price: "500",
    },
    {
      title: "2 states",
      image:
        "https://m.media-amazon.com/images/I/71as0QgjDaL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "one Indian girl",
      image:
        "https://m.media-amazon.com/images/I/71NDrQ0hbRL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Shatter me:",
      image:
        "https://m.media-amazon.com/images/I/81RxMMXUnFL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Percy Jackson",
      image:
        "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "Magnus chasel",
      image:
        "https://m.media-amazon.com/images/I/915aQZ1EBAL._AC_UF1000,1000_QL80_.jpg",
      price: "500",
    },
    {
      title: "God of fury",
      image: "https://m.media-amazon.com/images/I/51R3igyERzL.jpg",
      price: "500",
    },
  ];

  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between p-4 bg-green-500 shadow-lg shadow-slate-400">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path>
            <path d="M8 6h9v2H8z"></path>
          </svg>
          <p>BookMart!</p>
        </div>
        <div className="flex gap-5">
          <a href="#about">
            {" "}
            <p className="border-2 px-2 py-1 rounded-lg border-cyan-300 bg-green-300">
              About
            </p>
          </a>

          <a href="#products">
            {" "}
            <p className="border-2 px-2 py-1 rounded-lg border-cyan-300 bg-green-300">
              Products
            </p>
          </a>

          <a href="#contact">
            <p className="border-2 px-2 py-1 rounded-lg border-cyan-300 bg-green-300">
              Contact
            </p>
          </a>
        </div>
      </nav>

      {/* About */}
      <div
        id="about"
        className=" bg-cyan-200 flex flex-col lg:flex-row md:flex-row justify-around pb-4 md:pb-0  lg:pb-0 px-8"
      >
        <div className=" md:p-16  lg:p-16 m-4 md:m-0 lg:m-0  ">
          <p className="md:text-3xl lg:text-3xl text-2xl font-semibold py-3 md:py-3 lg:py-7 text-center ">
            !!!Book Mart!!!
          </p>
          <p className="md:text-xl font-medium text-base rounded-3xl p-3 bg-white">
            Welcome to BookMart - your one-stop destination for great books!
            Explore our handpicked collection spanning various genres, from
            classics to bestsellers. Enjoy easy browsing and fast shipping. Join
            our community and dive into the world of literature today!
          </p>
        </div>
        <img src="https://i.gifer.com/Ybin.gif" height={80} alt="book" />
      </div>

      {/* product listing */}
      <h1
        id="products"
        className=" pt-4 text-center font-bold text-3xl text-cyan-500"
      >
        Our Books!
      </h1>
      <div className=" mt-4 px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <>
            <div>
              <div className="col cursor-pointer border-2 border-cyan-500 rounded-md text-center ">
                <img
                  className="px-4 pt-2 rounded-3xl"
                  src={product.image}
                  height={80}
                  alt="book"
                />
                <div className="flex justify-around p-3">
                  <h1 className="font-semibold">{product.title}</h1>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* contact */}

      <div className="h-1/3 bg-green-400 p-28 mt-6 " id="contact">
        <h1 className="font-bold text-3xl text-center text-cyan-700">
          Contact Us!
        </h1>
        <div className="flex justify-around pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 24 24"
          >
            <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path>
            <path d="M8 6h9v2H8z"></path>
          </svg>
          <div className="">
            <h1 className="font-semibold text-2xl pb-5 pt-6">
              Mail us at :- bookmart101@gmail.com
            </h1>
            <div className="flex gap-x-4">
              <h1 className="font-semibold text-2xl">Or DM us at :-</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
