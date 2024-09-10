import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "auto",
};

export const Loader = () => {
  return <HashLoader cssOverride={override} color="#1a507c" size={75} />;
};
