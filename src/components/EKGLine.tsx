const EKGLine = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 400 50"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="ekg-clip">
          <rect x="0" y="0" width="400" height="50">
            <animate
              attributeName="x"
              from="-400"
              to="0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </clipPath>
      </defs>
      
      {/* Background trace (faded) */}
      <path
        d="M0,25 L30,25 L35,25 L40,25 L45,10 L50,40 L55,5 L60,45 L65,25 L80,25 L100,25 L130,25 L135,25 L140,25 L145,10 L150,40 L155,5 L160,45 L165,25 L180,25 L200,25 L230,25 L235,25 L240,25 L245,10 L250,40 L255,5 L260,45 L265,25 L280,25 L300,25 L330,25 L335,25 L340,25 L345,10 L350,40 L355,5 L360,45 L365,25 L380,25 L400,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.2"
      />
      
      {/* Animated drawing line */}
      <path
        d="M0,25 L30,25 L35,25 L40,25 L45,10 L50,40 L55,5 L60,45 L65,25 L80,25 L100,25 L130,25 L135,25 L140,25 L145,10 L150,40 L155,5 L160,45 L165,25 L180,25 L200,25 L230,25 L235,25 L240,25 L245,10 L250,40 L255,5 L260,45 L265,25 L280,25 L300,25 L330,25 L335,25 L340,25 L345,10 L350,40 L355,5 L360,45 L365,25 L380,25 L400,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: 800,
          animation: "ekg-draw 4s linear infinite"
        }}
      />
      
      {/* Moving dot */}
      <circle r="4" fill="currentColor">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M0,25 L30,25 L35,25 L40,25 L45,10 L50,40 L55,5 L60,45 L65,25 L80,25 L100,25 L130,25 L135,25 L140,25 L145,10 L150,40 L155,5 L160,45 L165,25 L180,25 L200,25 L230,25 L235,25 L240,25 L245,10 L250,40 L255,5 L260,45 L265,25 L280,25 L300,25 L330,25 L335,25 L340,25 L345,10 L350,40 L355,5 L360,45 L365,25 L380,25 L400,25"
        />
      </circle>
      
      <style>
        {`
          @keyframes ekg-draw {
            0% {
              stroke-dashoffset: 800;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  );
};

export default EKGLine;