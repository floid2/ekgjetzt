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
      
      {/* Realistic EKG path: P wave, QRS complex, T wave repeated */}
      {/* Single beat ~100 units: baseline→P wave→PR→QRS→ST→T wave→baseline */}
      {(() => {
        const beat = (ox: number) => 
          `L${ox},25 L${ox+5},25 ` +
          `C${ox+8},25 ${ox+10},21 ${ox+13},21 C${ox+16},21 ${ox+18},25 ${ox+20},25 ` + // P wave
          `L${ox+25},25 ` + // PR segment
          `L${ox+28},27 L${ox+30},25 L${ox+32},8 L${ox+35},42 L${ox+38},25 ` + // QRS
          `L${ox+42},25 L${ox+48},25 ` + // ST segment
          `C${ox+52},25 ${ox+55},18 ${ox+58},18 C${ox+61},18 ${ox+64},25 ${ox+68},25 ` + // T wave
          `L${ox+75},25`;
        const d = `M0,25 ${beat(0)}${beat(80)}${beat(160)}${beat(240)}${beat(320)} L400,25`;
        return (
          <>
            <path d={d} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 1200,
                strokeDashoffset: 1200,
                animation: "ekg-draw 4s linear infinite"
              }}
            />
            <circle r="4" fill="currentColor">
              <animateMotion dur="4s" repeatCount="indefinite" path={d} />
            </circle>
          </>
        );
      })()}
      
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