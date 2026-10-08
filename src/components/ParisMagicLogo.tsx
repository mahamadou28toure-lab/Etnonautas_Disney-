import React from 'react';

interface ParisMagicLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

/**
 * Exact vector reproduction of the official Paris Magic Plan logo:
 * - Outer rounded stadium frame in Rose Pink (#EB539F)
 * - Inner rounded stadium frame in Royal Navy (#1E3264) with horizon base line & lower bar
 * - Eiffel Tower (left) & Disneyland Castle (right) in clean Rose Pink (#EB539F) line art
 * - Three 4-pointed stars in Royal Navy (#1E3264)
 */
export const ParisMagicLogo: React.FC<ParisMagicLogoProps> = ({
  className = '',
  size = 44,
  showWordmark = true,
  wordmarkClassName = 'font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1E3264]',
}) => {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo de Paris Magic Plan"
        className="shrink-0"
      >
        <defs>
          <clipPath id="innerWindowClip">
            <rect x="131" y="92" width="238" height="316" rx="114" />
          </clipPath>
        </defs>

        {/* Outer Rose Pink Capsule Frame */}
        <rect
          x="100"
          y="62"
          width="300"
          height="376"
          rx="146"
          fill="#FFFFFF"
          stroke="#EB539F"
          strokeWidth="12"
        />

        {/* Clipped Interior Artwork (Monuments + Baseline) */}
        <g clipPath="url(#innerWindowClip)">
          {/* Three 4-Pointed Navy Stars */}
          {/* Star 1: Left (between Eiffel Tower and Castle) */}
          <path
            d="M239 152 L243.5 168.5 L260 173 L243.5 177.5 L239 194 L234.5 177.5 L218 173 L234.5 168.5 Z"
            fill="#1E3264"
            stroke="#1E3264"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Star 2: Top Center-Left */}
          <path
            d="M271 118 L275.2 133.8 L291 138 L275.2 142.2 L271 158 L266.8 142.2 L251 138 L266.8 133.8 Z"
            fill="#1E3264"
            stroke="#1E3264"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Star 3: Right of Tall Spire */}
          <path
            d="M343 160 L347.2 175.8 L363 180 L347.2 184.2 L343 200 L338.8 184.2 L323 180 L338.8 175.8 Z"
            fill="#1E3264"
            stroke="#1E3264"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* ================= EIFFEL TOWER (LEFT, #EB539F) ================= */}
          <g
            stroke="#EB539F"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Top Antenna */}
            <line x1="184" y1="149" x2="184" y2="157" />
            {/* Top Lantern Cupola */}
            <path d="M175 170 C175 156, 193 156, 193 170" />
            {/* Upper Platform Bar */}
            <line x1="171" y1="170" x2="197" y2="170" />
            {/* Outer Left Curve */}
            <path d="M175 170 C172 238, 160 305, 135 362" />
            {/* Outer Right Curve */}
            <path d="M193 170 C196 238, 206 302, 223 354" />
            {/* Middle Platform Bar */}
            <line x1="162" y1="267" x2="206" y2="267" />
            {/* Inner Triangle Truss */}
            <path d="M184 277 L164 342 M184 277 L204 342" />
            {/* Bottom Arch */}
            <path d="M151 372 A33 35 0 0 1 216 372" />
          </g>

          {/* ================= DISNEYLAND CASTLE (RIGHT, #EB539F) ================= */}
          <g
            stroke="#EB539F"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* 1. Leftmost Turret */}
            <line x1="223" y1="313" x2="223" y2="372" />
            <line x1="253" y1="313" x2="253" y2="328" />
            <line x1="219" y1="313" x2="257" y2="313" />
            <path d="M222 313 Q234 286 238 256 Q242 286 254 313" />

            {/* 2. Center-Left Mid Tower */}
            <line x1="253" y1="248" x2="253" y2="313" />
            <line x1="280" y1="248" x2="280" y2="265" />
            <line x1="250" y1="248" x2="283" y2="248" />
            <path d="M252 248 L261 213 L272 213 L281 248" />

            {/* 3. Tallest Main Spire Tower */}
            <line x1="288" y1="213" x2="288" y2="254" />
            <line x1="322" y1="213" x2="322" y2="297" />
            {/* Stepped Collar */}
            <path d="M294 197 L316 197 L325 213 L286 213 Z" />
            {/* Upper Tower Shaft */}
            <line x1="294" y1="147" x2="294" y2="197" />
            <line x1="316" y1="147" x2="316" y2="197" />
            <line x1="290" y1="147" x2="320" y2="147" />
            {/* Tall Pointed Spire */}
            <path d="M293 147 Q302 125 305 103 Q308 125 317 147" />

            {/* 4. Central Gatehouse & Double Gothic Arch */}
            <path d="M268 297 L280 256 L292 256 L304 297" />
            <line x1="266" y1="297" x2="278" y2="297" />
            <line x1="294" y1="297" x2="306" y2="297" />
            {/* Oval Medallion */}
            <ellipse cx="286" cy="297" rx="6.5" ry="11" fill="#FFFFFF" />
            {/* Gatehouse Side Pillars */}
            <line x1="270" y1="297" x2="270" y2="318" />
            <line x1="302" y1="297" x2="302" y2="318" />
            {/* Outer Gothic Arch */}
            <path d="M257 372 C257 344, 270 326, 286 314 C302 326, 316 344, 316 372" />
            {/* Inner Gothic Arch */}
            <path d="M268 372 C268 350, 276 338, 286 330 C296 338, 305 350, 305 372" />

            {/* 5. Rightmost Turret */}
            <line x1="321" y1="313" x2="321" y2="340" />
            <line x1="351" y1="313" x2="351" y2="372" />
            <line x1="317" y1="313" x2="355" y2="313" />
            <path d="M320 313 Q332 286 336 256 Q340 286 352 313" />
          </g>

          {/* Horizontal Navy Ground Line */}
          <line
            x1="135"
            y1="372"
            x2="365"
            y2="372"
            stroke="#1E3264"
            strokeWidth="8.5"
            strokeLinecap="round"
          />

          {/* Shorter Centered Lower Navy Bar */}
          <line
            x1="207"
            y1="391"
            x2="293"
            y2="391"
            stroke="#1E3264"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
        </g>

        {/* Inner Royal Navy Capsule Frame */}
        <rect
          x="129"
          y="90"
          width="242"
          height="320"
          rx="116"
          fill="none"
          stroke="#1E3264"
          strokeWidth="9"
        />
      </svg>

      {showWordmark && (
        <span className={wordmarkClassName}>Paris Magic Plan</span>
      )}
    </span>
  );
};
