import { useContext } from "react";
import UseFormContext from "../context/UseFormContext";

const FormContext = () => {
  return useContext(UseFormContext);
}

export default FormContext;
