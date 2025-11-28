const EKGLine = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,25 L20,25 L25,25 L30,25 L35,10 L40,40 L45,5 L50,45 L55,25 L60,25 L80,25 L100,25 L105,25 L110,25 L115,10 L120,40 L125,5 L130,45 L135,25 L140,25 L160,25 L180,25 L185,25 L190,25 L195,15 L200,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="ekg-animation"
      />
    </svg>
  );
};

export default EKGLine;