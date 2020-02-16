import React from 'react';
import { SvgrProps } from '.';

const Doctor: React.FC<SvgrProps> = ({ height = 512, width = 512 }) => {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width}>
      <path
        d="M424 345.18V496H152V384l-64 72H48v-64l44.73-70.3a48.026 48.026 0 0131.91-21.45L192 288l64 176 64-176 63.3 9.74a47.992 47.992 0 0140.7 47.44z"
        fill="#e0e0de"
      />
      <path
        d="M424 345.18V496H209.62c52.51-24.62 142.82-81.13 190.03-192.59A47.989 47.989 0 01424 345.18z"
        fill="#d6d6d4"
      />
      <path d="M320 288l-24-24v-48h-80v48l-24 24 64 176z" fill="#fec9a3" />
      <path
        d="M296 243.856V216h-80v27.856a71.963 71.963 0 0080 0z"
        fill="#feb784"
      />
      <path
        d="M152 352l40 16-8 32 72 64-64-176zM360 352l-40 16 8 32-72 64 64-176z"
        fill="#ebebe9"
      />
      <path d="M352 400h16v96h-16zM288 448h64v16h-64z" fill="#c7c7c5" />
      <path
        d="M320 288l-26.04 71.62v.01L256 464l-37.96-104.38L192 288l24-24 40 63.97L296 264z"
        fill="#45a7d1"
      />
      <path
        d="M320 288l-26.04 71.62L256 327.97 296 264zM256 327.97l-37.96 31.65L192 288l24-24z"
        fill="#79c6e8"
      />
      <path
        d="M256 240.488a72 72 0 01-72-72v-64a72 72 0 0172-72 72 72 0 0172 72v64a72 72 0 01-72 72z"
        fill="#fec9a3"
      />
      <path
        d="M176 104h8v48h-8a24 24 0 01-24-24 24 24 0 0124-24zM336 152h-8v-48h8a24 24 0 0124 24 24 24 0 01-24 24z"
        fill="#feb784"
      />
      <path
        d="M275.969 161.578c-7.529 4.392-18.127 6.91-29.078 6.91H232v16h14.891c13.9 0 27.09-3.228 37.14-9.09z"
        fill="#7a432a"
      />
      <path
        d="M184 112.488v-28.8c0-23.859 17.908-43.2 40-43.2l-1.408 4.561A175.251 175.251 0 01184 112.488z"
        fill="#f27900"
      />
      <path
        d="M296 63.516s-80 25.1-120-6.725c8-9.437 48.667-57.921 120-15.914 0 0 23.333-7.988 32 14.558 8.072 21 0 56.565 0 56.565s-29.333-15.635-32-48.484z"
        fill="#f98500"
      />
      <path
        d="M352 120h-24v16h16v40.488a88 88 0 01-176 0V136h16v-16h-24a8 8 0 00-8 8v48.488a104.14 104.14 0 0096 103.7V412a68 68 0 01-136 0V288H96v124a84 84 0 00168 0V280.184a104.14 104.14 0 0096-103.7V128a8 8 0 00-8-8z"
        fill="#348fd9"
      />
      <path
        d="M60.914 488h-1.828A35.087 35.087 0 0124 452.914a35.074 35.074 0 011.35-9.639L40 392h56v60.914A35.087 35.087 0 0160.914 488z"
        fill="#ebebe9"
      />
      <path
        d="M80 280h16a16 16 0 0116 16v48a16 16 0 01-16 16H40v-40a40 40 0 0140-40z"
        fill="#fec9a3"
      />
      <path d="M40 360h56v32H40z" fill="#79c6e8" />
      <path d="M192 448h16v16h-16zM248 464h16v32h-16z" fill="#c7c7c5" />
      <circle cx={104} cy={280} fill="#ebebe9" r={32} />
      <g fill="#7a432a">
        <circle cx={220} cy={124} r={12} />
        <circle cx={292} cy={124} r={12} />
      </g>
    </svg>
  );
};

export default Doctor;
