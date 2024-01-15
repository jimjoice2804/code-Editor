import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ language, code, onChange, theme }: any) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: any) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height={"85vh"}
        width={"100%"}
        value={value}
        defaultValue="// some comment"
        language={language || "javascript"}
        theme={theme}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;