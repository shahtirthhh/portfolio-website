const loading = () => {
  return (
    <div className=" flex justify-center items-center w-screen h-[calc(100dvh)]">
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center ">
        <p className="font-SFPro sm:text-4xl text-lg text-primaryText px-4">
          Exciting greatness on the way
        </p>
        <div className="line-loader"></div>
      </div>
    </div>
  );
};

export default loading;
