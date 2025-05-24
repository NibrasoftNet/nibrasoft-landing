const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <img
        src="/images/nibras-long-logo-dark-image.png"
        alt="nibras-logo"
        className="w-72"
      />
      <span className="text-3xl">Loading...</span>
    </div>
  );
};

export default Loading;
