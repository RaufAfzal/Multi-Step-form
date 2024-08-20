import FormContext from "../hooks/FormContext"

const Shipping = () => {
    const {data , handleChange} = FormContext()

    const content = (
        <>
            <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name = "sameAsBilling"
                    value={data.sameAsBilling}
                    onChange={handleChange}
                />
                Same as Billing Address
            </label>

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="shipFirstName">First Name</label>
                    <input
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        placeholder="Abdul"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="shipLastName">Last Name</label>
                    <input
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        placeholder="Rauf"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipLastName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
            </div>

            <label htmlFor="shipAddress1">Address</label>
            <input
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                placeholder="Lahore"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress1}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipAddress2"></label>
            <input
                type="text"
                id="shipAddress2"
                name="shipAddress2"
                placeholder="Apt. 2"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress2}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipCity">City</label>
            <input
                type="text"
                id="shipCity"
                name="shipCity"
                placeholder="Lahore"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.shipCity}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipState">State</label>
            <select
                id="shipState"
                name="shipState"
                value={data.shipState}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            >
                <option value="Pun">Punjab</option>
                <option value="Sin">Sindh</option>
                <option value="Baloch">Balochistan</option>
                <option value="KPK">Khyber Pakhtunkhwa</option>
                <option value="Kashmir">Kashmir</option>
                <option value="AJK">Azad Jammu Kashmir</option>
                <option value="Cb">Gilgit-Baltistan15</option>
            </select>

            <label htmlFor="shipZipCode">Zip Code</label>
            <input
                type="text"
                id="shipZipCode"
                name="shipZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.shipZipCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />
        </>
    )
  return content
}

export default Shipping
