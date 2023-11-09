import {Alert, Badge} from "react-bootstrap";

export const InfoMessage = ({message = "Error genérico", color = "primary"}) => {
  return (
    <Alert variant={color}>
      {message}
    </Alert>
  );
};