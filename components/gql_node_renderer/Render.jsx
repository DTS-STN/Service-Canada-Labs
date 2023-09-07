import Recur from "./Recur";
import { v4 as uuid } from "uuid";

export default function Render(props) {
  return (
    <>
      {props.data.map((node) => (
        <Recur key={uuid()} node={node} excludeH1={props.excludeH1} />
      ))}
    </>
  );
}
