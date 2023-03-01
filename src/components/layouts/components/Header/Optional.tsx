import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Prop {
  icon: any;
  textBold?: string;
  textLight?: string;
  onNavigateCart?: any;
}

const Optional: FC<Prop> = ({ icon, textBold, textLight, onNavigateCart}) => {
  return (
    <div className="optional flex items-center ml-3 ">
      <FontAwesomeIcon className="text-fuchsia-600 text-2xl text-black" icon={icon} onClick = {onNavigateCart}/>
      <div className="optional-text ml-2">
        <div className="text-bold font-semibold text-xl leading-none">
          {textBold}
        </div>
        <div className="font-light text-sm">{textLight}</div>
      </div>
    </div>
  );
};

export default Optional;
