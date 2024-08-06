const ResumePage = () => {
  // return new Promise(() => setTimeout(() => {}, 5000));
  return (
    <div className="w-full h-full">
      <iframe
        src="/media/tirth-shah-gandhinagar.pdf"
        type="application/pdf"
        className="w-full h-screen"
      ></iframe>
    </div>
  );
};

export default ResumePage;
