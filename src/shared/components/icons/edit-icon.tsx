import React from "react";

const EditIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="#2F2F2F"
      className={className}
    >
      <path
        d="M1.82369 12.5221L0.762005 16.2051C0.759832 16.2126 0.76679 16.2196 0.774338 16.2175L4.49038 15.1652L13.5571 6.17886L10.8904 3.53583L1.82369 12.5221Z"
        stroke="#2F2F2F"
        strokeWidth="0.4"
      />
      <path d="M12.3862 1.6051C12.8265 1.16879 13.5388 1.16401 13.985 1.59437L15.4163 2.97477C15.8712 3.41358 15.8762 4.13643 15.4272 4.5813L14.5001 5.5L11.437 2.54571L12.3862 1.6051Z" />
    </svg>
  );
};

export default EditIcon;
