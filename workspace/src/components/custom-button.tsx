// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
type Tpops = {
  text: string;
};

const CustomButton: React.FC<Tpops> = ({ text }) => {
  return (
    <div>
      <button
        className="btn"
        type="submit"
        style={{
          color:"white",
          background: "#007afe",
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
