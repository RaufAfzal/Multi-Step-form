import FormContext from "../hooks/FormContext"
import FormInput from "./FormInput";

const Form = () => {

    const {title,
            data,
            page,
            setPage,
            canSubmit,
            disablePrev,
            disableNext,
            prevHide,
            nextHide,
            submitHide
        } = FormContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data))
    }

    const handlePrev = () => {setPage (prev => prev - 1)}

    const handleNext = () => {setPage (prev => prev + 1)}

  return (
    <>
        <form onSubmit={handleSubmit}>
            <header className="form-header">
                <h2>{title[page]}</h2>
            

                <div className="button-container">

                    <button type="button" className= {`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>
                    <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>

                </div>

            </header>

        </form>

        {<FormInput/>}
    </>
  )
}

export default Form
