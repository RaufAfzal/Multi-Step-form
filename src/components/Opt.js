import FormContext from "../hooks/FormContext"

const Opt = () => {

    const {data , handleChange} = FormContext();

  return (
   <>
        <label htmlFor="opt">
            <input id="opt" type="checkbox" name="optInNews" checked={data.optInNews} onChange={handleChange} ></input>
        Recieve our Newsletter
        </label>

        <ul className="flex-col">
                <li>Save 10% Now</li>
                <li>Receive Discount Coupons</li>
                <li>Find Out About New Products</li>
        </ul>
   </>
  )
}

export default Opt
