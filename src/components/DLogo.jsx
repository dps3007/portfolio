export default function DLogo({ size = 260 }) {

  
  return (
    
    <div className="relative mx-auto mt-25 w-40 sm:w-52 md:w-64 lg:w-80">
            <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Multicolor D logo"
    >
      <defs>
        <mask id="dMask">
          <rect width="100%" height="100%" fill="black" />
          <path
            d="
              M80 60
              H180
              A140 140 0 0 1 180 340
              H80
              Z
            "
            fill="white"
          />

          <path
            d="
              M140 120
              H180
              A100 80 10 0 1 170 279
              H140
              Z
            "
            fill="black"
          />
        </mask>
      </defs>

      
      <g mask="url(#dMask)">
        
        <rect x="0" y="0" width="400" height="170" fill="#EA4335" />
      
        <rect x="200" y="0" width="200" height="200" fill="#4285F4" />
       
        <rect x="0" y="170" width="400" height="90" fill="#FBBC05" />
      
        <rect x="0" y="260" width="400" height="140" fill="#34A853" />
      </g>
    </svg>
  </div>
  );
}
