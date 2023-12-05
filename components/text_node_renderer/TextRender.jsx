import TextRecur from "./TextRecur";
import { v4 as uuid } from "uuid";

export default function TextRender(props) {
  return (
    <>
      {props.data.map((node, index) => {
        console.log(node, index);
        return (
          <TextRecur
            key={uuid()}
            node={node}
            index={index}
            excludeH1={props.excludeH1}
          />
        );
      })}
    </>
  );
}
