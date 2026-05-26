import { useEffect, useRef, useState } from "react";

import { usePortfolio } from "../../hooks/usePortfolio";

const EditableText = ({
  value,
  onChange,
  as: Tag = "span",
  className = "",
  multiline = false,
  ...props
}) => {
  const { isEditMode, isAuth } = usePortfolio();
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);

  const canEdit = isEditMode && isAuth;

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  const commit = () => {
    const text = ref.current?.innerText ?? "";
    onChange(multiline ? text : text.replace(/\n/g, " "));
    setEditing(false);
  };

  if (!canEdit) {
    return (
      <Tag className={className} {...props}>
        {value}
      </Tag>
    );
  }

  if (!editing) {
    return (
      <Tag
        className={`${className} cursor-text outline-dashed outline-2 outline-transparent hover:outline-orange-400/60 rounded-sm transition-[outline-color]`}
        onClick={() => setEditing(true)}
        title="Click to edit"
        {...props}
      >
        {value}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={`${className} outline outline-2 outline-orange-500 rounded-sm bg-white/10 min-w-[1ch]`}
      onBlur={commit}
      onKeyDown={(e) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          commit();
        }
        if (e.key === "Escape") {
          setEditing(false);
        }
      }}
      {...props}
    >
      {value}
    </Tag>
  );
};

export default EditableText;
