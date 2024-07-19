// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
type Tpops = {
  text: string;
};

const CustomButton: React.FC<Tpops> = ({ text }) => {
  return (
    <div>
      <button
        className="btn bg-blue-500 hover:bg-blue-700"
        type="submit"
        style={{
          color:"white",
          fontWeight: "lighter",
          marginTop: "7px",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
