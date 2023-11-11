import React from "react";

const ProfileIcon = ({
  width = "26",
  height = "24",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 24"
      fill="#2F2F2F"
    >
      <path d="M13.0931 12.2826C9.48742 12.2826 8.78564 14.7583 8.51697 15.5557C8.43965 15.7852 8.63706 16 8.89606 16H17.1044C17.3546 16 17.5502 15.7986 17.4885 15.5735C17.2383 14.661 16.7151 12.2826 13.0931 12.2826Z" />
      <path d="M15 9.5C15 10.6046 14.1046 11.5 13 11.5C11.8954 11.5 11 10.6046 11 9.5C11 8.39543 11.8954 7.5 13 7.5C14.1046 7.5 15 8.39543 15 9.5Z" />
    </svg>
  );
};

export default ProfileIcon;
