import { useRef } from "react";

import { usePortfolio } from "../../hooks/usePortfolio";
import { fileToBase64, resolveImageSrc } from "../../utils/imageUtils";

const EditableImage = ({
  src,
  onChange,
  alt = "",
  className = "",
  imgClassName = "",
}) => {
  const { isEditMode, isAuth, showToast } = usePortfolio();
  const inputRef = useRef(null);
  const canEdit = isEditMode && isAuth;

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const base64 = await fileToBase64(file);
      onChange(base64);
      showToast("Image updated");
    } catch (err) {
      showToast(err.message || "Upload failed", "error");
    }
    e.target.value = "";
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={resolveImageSrc(src)}
        alt={alt}
        className={imgClassName}
      />
      {canEdit && (
        <>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-[inherit] cursor-pointer"
            title="Change image"
          >
            <span className="text-white text-xs font-semibold px-2 py-1 bg-black/60 rounded">
              Change
            </span>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
        </>
      )}
    </div>
  );
};

export default EditableImage;
