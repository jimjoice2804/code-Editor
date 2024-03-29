import React, { ChangeEvent, FC, Dispatch, SetStateAction } from "react";
import { classnames } from "@/app/utils/gendral";

interface CustomInputProps {
  customInput: string;
  setCustomInput: Dispatch<SetStateAction<string>>;
}

const CustomInput: FC<CustomInputProps> = ({ customInput, setCustomInput }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCustomInput(e.target.value);
  };
  return (
    <>
      {" "}
      <textarea
        rows={5}
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          "focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;