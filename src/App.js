import { UseFormProvider } from "./context/UseFormContext";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <UseFormProvider>
      <ProgressBar/>
      <Form/>
    </UseFormProvider>
   
  )
}

export default App;
