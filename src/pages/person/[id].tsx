import { FC } from "react";
import { useParams } from "react-router-dom";
const PersonPage: FC = () => {
  const { id } = useParams();

  return <div>this is Person {id} page</div>;
};

export default PersonPage;
