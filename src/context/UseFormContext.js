import { createContext, useState, useEffect } from "react";

const UseFormContext = createContext({});

const title = {             //because the re-renders depends on this object so we define it outside the provider
    0: 'Billing info',
    1: 'Shipping info',
    3: 'Opt-In'
}

export const UseFormProvider = ({ children }) => {


    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billAddress1: "",
        billAddress2: "",
        billCity: "",
        billState: "",
        billZipCode: "",
        sameAsBilling: false,
        shipFirstName: "",
        shipLastName: "",
        shipAddress1: "",
        shipAddress2: "",
        shipCity: "",
        shipState: "",
        shipZipCode: "",
        optInNews: false
    })

    useEffect(() => {
        if (data.sameAsBilling) {
            setData(prevData => ({
                ...prevData,
                shipFirstName: prevData.billFirstName,
                shipLastName: prevData.billLastName,
                shipAddress1: prevData.billAddress1,
                shipAddress2: prevData.billAddress2,
                shipCity: prevData.billCity,
                shipState: prevData.billState,
                shipZipCode: prevData.billZipCode
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                shipFirstName: "",
                shipLastName: "",
                shipAddress1: "",
                shipAddress2: "",
                shipCity: "",
                shipState: "",
                shipZipCode: ""
            }))
        }

    }, [data.sameAsBilling])



    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        const finalValue = type === "checkbox" ? checked : value;

        setData((prevData) => ({
            ...prevData,
            [name]: finalValue,
        }));
    };


    let canSubmit;
    if (Object.keys(title).length - 1) {

        const
            {
                billAddress2,
                sameAsBilling,
                shipAddress2,
                optInNews,
                ...requiredInputs
            } = data

        canSubmit = [Object.values(requiredInputs)].every(Boolean)
    }

    const starter = {
        0: 'bill',
        1: 'ship'
    }

    const canNext = Object.keys(data)
        .filter(key => key.startsWith(starter[page]) && key !== `${starter[page]}Address2`)
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext = page === (Object.keys(title).length - 1) || (!canNext)

    const nextHide = page === Object.keys(title).length - 1 && 'remove-button'

    const prevHide = page === 0 && 'remove-button'

    const submitHide = page !== Object.keys(title).length - 1 && 'remove-button'

    return (
        <UseFormContext.Provider value={{
            data, handleChange, title, page, setPage, canSubmit, disablePrev
            , disableNext, prevHide, nextHide, submitHide
        }}>
            {children}
        </UseFormContext.Provider>
    )
}

export default UseFormContext;