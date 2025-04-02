
function Form2() {
  return (
    <div className="form-container">
        
        <h2>Contact Me</h2>
        <label>
            Name:
            <input type="text" name="name" placeholder="Enter Your Full Name" />
        </label>
        <label>
            Email:
            <input type="text" name="email" placeholder="Enter Your Email" />
        </label>

        <br />

        <h2>Select the PC parts you are most interested in:</h2>
        <div className="checkbox-group">
            <label><input type="checkbox" value="cpu" /> CPU</label>
            <label><input type="checkbox" value="gpu" /> GPU</label>
            <label><input type="checkbox" value="motherboard" /> Motherboard</label>
            <label><input type="checkbox" value="ram" /> RAM</label>
            <label><input type="checkbox" value="power_supply" /> Power Supply</label>
        </div>

        <br />

        <h2>Favorite PC Component Brand:</h2>
        <div className="checkbox-group">
            <label><input type="radio" name="brand" value="asus" /> ASUS</label>
            <label><input type="radio" name="brand" value="msi" /> MSI</label>
            <label><input type="radio" name="brand" value="gigabyte" /> Gigabyte</label>
            <label><input type="radio" name="brand" value="corsair" /> Corsair</label>
            <label><input type="radio" name="brand" value="kingston" /> Kingston</label>
        </div>

        <p>
            <label htmlFor="comments">Comments:</label><br />
            <textarea id="comments" name="comments" rows={4} cols={40}></textarea>
        </p>

        <p>
            <label htmlFor="budget">What is your budget range?</label><br />
            <select id="budget" name="budget">
                <option value="under500">Under $500</option>
                <option value="500to1000">$500 - $1000</option>
                <option value="over1000">Over $1000</option>
            </select>
        </p>

        <div className="submit-button">
            <button type="submit">Submit</button>
        </div>
    </div>
  );
}

export default Form2;