import React from "react";

const ShareIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="29"
      viewBox="0 0 33 29"
      fill="#2F2F2F"
      className={className}
    >
      <path d="M17.4167 17.4167C12.4415 17.034 9.91585 18.7724 8.57994 20.4127C8.40681 20.6252 8.01104 20.4578 8.08386 20.1935C9.87552 13.6908 14.595 12.1673 17.4167 11.9792V8.91687C17.4167 8.48627 17.9373 8.27062 18.2418 8.5751L23.7353 14.0686C23.9182 14.2516 23.9247 14.5462 23.7498 14.737L18.2563 20.7299C17.9584 21.0548 17.4167 20.8443 17.4167 20.4035V17.4167Z" />
    </svg>
  );
};

export default ShareIcon;
