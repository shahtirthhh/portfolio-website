import Link from "next/link";

const NotFound = () => {
  // return (
  //   <div className="p-5 text-primaryText font-SFPro w-full h-full flex justify-center items-center">
  //     <h1 className="text-center sm:text-xl text-xs">
  //       ⚠ The page you are looking for does not exists !
  //     </h1>
  //   </div>
  // );
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
    <div className="text-center p-8 w-screen h-[calc(100dvh)] flex justify-center items-center flex-col gap-5 ">
      <p className="text-xl mt-4 font-primary">
        Uhh ohh, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
    // </div>
  );
};

export default NotFound;
