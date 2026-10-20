import React from 'react';

interface VisionLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  variant?: 'mark' | 'full';
}

export const VisionLogo: React.FC<VisionLogoProps> = ({
  className = 'h-10 w-auto',
  theme = 'dark',
  variant = 'mark'
}) => {
  const textColor = theme === 'light' ? '#FFFFFF' : '#22292F';
  const subTextColor = theme === 'light' ? '#CBD5E1' : '#475569';
  const orangeAccent = '#F26522';

  if (variant === 'full') {
    return (
      <svg
        viewBox="0 0 620 370"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="VISION Interior Design"
      >
        {/* INTERIOR header text */}
        <text
          x="356"
          y="78"
          fill={subTextColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="30"
          fontWeight="300"
          letterSpacing="12"
        >
          INTERIOR
        </text>

        {/* 'V' */}
        <text
          x="20"
          y="230"
          fill={textColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="188"
          fontWeight="250"
        >
          V
        </text>

        {/* Painterly Orange Brushstroke 'i' Dot */}
        <ellipse
          cx="160"
          cy="70"
          rx="25"
          ry="17"
          transform="rotate(-26 160 70)"
          fill={orangeAccent}
        />
        <ellipse
          cx="160"
          cy="70"
          rx="14"
          ry="9"
          transform="rotate(-15 160 70)"
          fill="#D64808"
          opacity="0.5"
        />

        {/* Painterly Orange Brushstroke 'i' Stem */}
        <path
          d="M 152 110 C 150 145, 149 190, 151 230 C 153 238, 163 238, 166 230 C 169 190, 170 145, 166 110 C 164 102, 154 102, 152 110 Z"
          fill={orangeAccent}
        />
        <path
          d="M 155 120 C 154 150, 153 195, 154 225 C 156 229, 160 229, 161 225 C 163 195, 164 150, 162 120 Z"
          fill="#FFA670"
          opacity="0.4"
        />

        {/* 'S I O N' */}
        <text
          x="195"
          y="230"
          fill={textColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="188"
          fontWeight="250"
          letterSpacing="6"
        >
          SION
        </text>

        {/* DESIGN footer text */}
        <text
          x="356"
          y="280"
          fill={subTextColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="30"
          fontWeight="300"
          letterSpacing="12"
        >
          DESIGN
        </text>

        {/* Tagline: COMMERCIAL • RETAIL • RESIDENTIAL */}
        <g transform="translate(20, 324)">
          <text
            x="0"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="400"
            letterSpacing="6"
          >
            COMMERCIAL
          </text>
          <circle cx="188" cy="-5" r="3.5" fill={orangeAccent} />
          <text
            x="206"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="400"
            letterSpacing="6"
          >
            RETAIL
          </text>
          <circle cx="320" cy="-5" r="3.5" fill={orangeAccent} />
          <text
            x="338"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="400"
            letterSpacing="6"
          >
            RESIDENTIAL
          </text>
        </g>

        {/* Sub-contact details */}
        <g transform="translate(20, 355)">
          <text
            x="0"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="500"
            letterSpacing="1"
          >
            P <tspan fontWeight="400">613.294.0077</tspan>
          </text>
          <circle cx="116" cy="-4" r="2.5" fill={orangeAccent} />
          <text
            x="130"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="500"
            letterSpacing="1"
          >
            E <tspan fontWeight="400">suzette@visioninteriordesign.ca</tspan>
          </text>
          <circle cx="362" cy="-4" r="2.5" fill={orangeAccent} />
          <text
            x="376"
            y="0"
            fill={subTextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="500"
            letterSpacing="1"
          >
            W <tspan fontWeight="400">www.visioninteriordesign.ca</tspan>
          </text>
        </g>
      </svg>
    );
  }

  // Compact navbar mark: INTERIOR / V I S I O N / DESIGN
  return (
    <svg
      viewBox="0 0 460 210"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VISION Interior Design"
    >
      {/* INTERIOR header text */}
      <text
        x="260"
        y="42"
        fill={subTextColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="400"
        letterSpacing="8"
      >
        INTERIOR
      </text>

      {/* 'V' */}
      <text
        x="10"
        y="150"
        fill={textColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="135"
        fontWeight="300"
      >
        V
      </text>

      {/* Painterly Orange Brushstroke 'i' Dot */}
      <ellipse
        cx="110"
        cy="40"
        rx="18"
        ry="13"
        transform="rotate(-26 110 40)"
        fill={orangeAccent}
      />
      <ellipse
        cx="110"
        cy="40"
        rx="10"
        ry="7"
        transform="rotate(-15 110 40)"
        fill="#D64808"
        opacity="0.5"
      />

      {/* Painterly Orange Brushstroke 'i' Stem */}
      <path
        d="M 104 68 C 102 92, 101 122, 103 150 C 105 155, 112 155, 114 150 C 117 122, 118 92, 115 68 C 113 62, 106 62, 104 68 Z"
        fill={orangeAccent}
      />
      <path
        d="M 106 75 C 105 95, 104 125, 105 145 C 106 148, 109 148, 110 145 C 112 125, 113 95, 111 75 Z"
        fill="#FFA670"
        opacity="0.4"
      />

      {/* 'S I O N' */}
      <text
        x="136"
        y="150"
        fill={textColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="135"
        fontWeight="300"
        letterSpacing="4"
      >
        SION
      </text>

      {/* DESIGN footer text */}
      <text
        x="260"
        y="185"
        fill={subTextColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="400"
        letterSpacing="8"
      >
        DESIGN
      </text>
    </svg>
  );
};
