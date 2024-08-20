import Billing from "./Billing"
import Shipping from "./Shipping"
import Opt from "./Opt"
import FormContext from "../hooks/FormContext"

const FormInput = () => {

    const { page } = FormContext()

    const display = {
        0: <Billing />,
        1: <Shipping />,
        2: <Opt/>

    }
    return (

        <div className="form-inputs flex-col">
            {display[page]}
        </div>


    )
}

export default FormInput
