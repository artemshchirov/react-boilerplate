import React from "react";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="#2F2F2F"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3066 14.5137C12.6451 15.025 11.8154 15.3292 10.9146 15.3292C8.75263 15.3292 7 13.5766 7 11.4146C7 9.25263 8.75263 7.5 10.9146 7.5C13.0766 7.5 14.8292 9.25263 14.8292 11.4146C14.8292 12.3154 14.525 13.1451 14.0137 13.8066L13.9985 13.7914L13.2914 14.4985L13.3066 14.5137ZM14.0183 15.2254C13.1721 15.9154 12.0917 16.3292 10.9146 16.3292C8.20035 16.3292 6 14.1289 6 11.4146C6 8.70035 8.20035 6.5 10.9146 6.5C13.6289 6.5 15.8292 8.70035 15.8292 11.4146C15.8292 12.5917 15.4154 13.6721 14.7254 14.5183L17.821 17.6139L17.1139 18.321L14.0183 15.2254Z"
      />
    </svg>
  );
};

export default SearchIcon;