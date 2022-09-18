import dynamic from "next/dynamic";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

export const RichText = ({ ...props }) => {
  return <JoditEditor {...props}></JoditEditor>;
};

export default RichText;
