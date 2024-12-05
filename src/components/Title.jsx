const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="inline-flex gap items-center mb-3">
        <p className="text-gray-500">
          {text1} <span className="text-gray-700 font ">{text2}</span>
        </p>
        <p className="w-8 md:w-12 h-[2PX] bg-gray-700"></p>
      </div>
    </div>
  );
};

export default Title;
