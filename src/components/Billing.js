import FormContext from "../hooks/FormContext";

const Billing = () => {
  const {data , handleChange} = FormContext()

  return (
    <div className="flex-col">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="billFirstName"
            pattern="([A-Z])[\w+.]{1,}"
            placeholder="Rauf"
            value={data.billFirstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="last-name"> Last Name</label>
          <input
            type="text"
            id="last-name"
            name="billLastName"
            pattern="([A-Z])[\w+.]{1,}"
            placeholder="Afzal"
            value={data.billLastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="billAddress1"
        pattern="[\w\d\s.#]{2,}"
        placeholder="Lahore, Pakistan"
        value={data.Address1}
        onChange={handleChange}
      />

      <label htmlFor="address2">Address</label>
        <input
          type="text"
          id="address2"
          name="billAddress2"
          pattern="[\w\d\s.#]{2,}"
          placeholder="Appartment 1"
          value={data.Address2}
          onChange={handleChange}
        />

      <label htmlFor="billCity">City</label>
        <input
          type="text"
          id="billCity"
          name="billCity"
          placeholder="New York"
          pattern="([A-Z])[\w\s.]{1,}"
          value={data.billCity}
          onChange={handleChange}
        />

      <label htmlFor="billState">State</label>
        <select
          id="billState"
          name="billState"
          value={data.billState}
          onChange={handleChange}
        >
         <option value="Pun">Punjab</option>
              <option value="Sin">Sindh</option>
              <option value="Baloch">Balochistan</option>
              <option value="KPK">Khyber Pakhtunkhwa</option>
              <option value="Kashmir">Kashmir</option>
              <option value="AJK">Azad Jammu Kashmir</option>
              <option value="Cb">Gilgit-Baltistan15</option>
        </select>

        <label htmlFor="billZipCode">Zip Code</label>
            <input
                type="text"
                id="billZipCode"
                name="billZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.billZipCode}
                onChange={handleChange}
            />
      
    </div>
  )
}

export default Billing
