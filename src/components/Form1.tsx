
function Form1() {
    return (
        <div className="form-container">
            <h2>Contact Me</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Enter Your Full Name"/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="Enter Your Email"/>
                </label>

                <br/>
                <br/>

                Join the Space Community:
                <br/>
                <label>
                    <input type="checkbox" value="email_updates"/>
                    Receive email updates
                </label>
                <br/>
                <label>
                    <input type="checkbox" value="upcoming_launches"/>
                    Receive information about upcoming launches
                </label>
                <br/>
                <label>
                    <input type="checkbox" value="space_news"/>
                    Receive news about new space discoveries
                </label>

                <br/>
                <br/>

                Favorite Space Mission:
                <br/>
                <label>
                    <input type="radio" name="mission" value="Apollo"/>
                    Apollo
                </label>
                <br/>
                <label>
                    <input type="radio" name="mission" value="Voyager"/>
                    Voyager
                </label>
                <br/>
                <label>
                    <input type="radio" name="mission" value="James_Webb"/>
                    James Webb
                </label>

                <br/>
                <br/>

                Favorite Space Discovery/Fact:
                <label>
                    <textarea></textarea>
                </label>

                <br/>
                <br/>

                Choose a Mission:
                <br/>
                <label>
                    <select id="missions" name="missions">
                        <option value="apollo11">Apollo 11</option>
                        <option value="apollo12">Apollo 12</option>
                        <option value="apollo13">Apollo 13</option>
                        <option value="apollo17">Apollo 17</option>
                    </select>
                </label>

                <br/>
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Form1;