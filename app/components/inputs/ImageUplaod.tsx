"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUplaodProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUplaod: React.FC<ImageUplaodProps> = ({ onChange, value }) => {
  const handleUplaod = useCallback(
    (result: any) => onChange(result.info.secure_url),
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUplaod}
      uploadPreset="peywp8mf"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className=" relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex
            flex-col justify-center items-center gap-4 text-neutral-600
            "
          >
            <TbPhotoPlus size={50} />
            <div className=" font-semibold text-lg">Click to uplaod</div>
            {value && (
              <div className=" absolute inset-0 w-full h-full">
                <Image
                  alt="Uplaod"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUplaod;
