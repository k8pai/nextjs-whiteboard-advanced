import React from "react";
import IconButton from "../IconButton";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function RedoButton({ onClick, disabled }: Props) {
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M7.5 9H16.5V18C16.5 18.8284 15.8284 19.5 15 19.5H9C8.17157 19.5 7.5 18.8284 7.5 18V9Z"
          fill="currentColor"
        />
        <path
          d="M6 6.75C6 6.33579 6.33579 6 6.75 6H8.37868C8.7765 6 9.15804 5.84196 9.43934 5.56066L10.0607 4.93934C10.342 4.65804 10.7235 4.5 11.1213 4.5H12.8787C13.2765 4.5 13.658 4.65804 13.9393 4.93934L14.5607 5.56066C14.842 5.84196 15.2235 6 15.6213 6H17.25C17.6642 6 18 6.33579 18 6.75V7.5H6V6.75Z"
          fill="currentColor"
        />
      </svg>
    </IconButton>
  );
}
