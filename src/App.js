import "./App.css";
import logo from "./assets/wobot-logo.svg";
import solidlines from "./assets/Solid_lines.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt='img'/>
      </div>
      <div className="main">
        <div className='rect'></div>
        <div className="form-container">
          <img src={solidlines} alt='img'/>
          <p className="p1">It's a delight to have you<br/>onboard</p>
          <p className="p2">Help us know you better.<br/>
            (This is how we optimize Wobot as per your business needs)
          </p>
          <form>
            <label htmlFor='cname'>Company name</label>
            <input type="text" id="cname" placeholder="e.g. Example Inc" />

            <label htmlFor='industry'>Industry</label>
            <select id="industry" name="industry">
              <option>Select</option>
              <option value="IT">Information Technology</option>
              <option value="Textiles">Textiles</option>
              <option value="Chemicals">Chemicals</option>
            </select>

            <label>Company Size</label>
            <div className='compSize'>
              <div>1-20</div>
              <div>21-50</div>
              <div>51-200</div>
              <div>201-500</div>
              <div>500+</div>
            </div>
            <input type='submit' value='Get Started'/>
          </form>
        </div>
        <div className='rect'></div>
      </div>
      <div className='footer'>
        <p className='content'>Terms of use | Privacy policy</p>
      </div>
    </div>
  );
}

export default App;
