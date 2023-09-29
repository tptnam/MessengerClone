import Messenger from "./messenger";
import Owner from "./owner.js";

export default function Messengers() {
  return (
    <div className="messengers">
      <Messenger />
      <Owner />
      <Messenger />
      <Owner />
      <Messenger />
      <Owner />
      <Messenger />
    </div>
  );
}
