import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValues, setInputValues] = useState({
    username : "", 
    password : "", 
    description : "", 
    gander : "male",
    language: "vi",
    checkStatus: false
  });
  const handleOnChange = event => {
    const {name, value} = event.target;
    setInputValues({...inputValues, [name]: (event.target.type === "checkbox") ? !(inputValues.checkStatus) : value})
  }

  const handleOnSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <input type="text" 
                           className="form-control" 
                           name="username"
                           onChange={handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input type="password" 
                           className="form-control" 
                           name="password"
                           onChange={handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label>Gander: </label>
                      <select name="gander" className="form-control" onChange={handleOnChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label>Description: </label>
                    <textarea name="description" 
                              className="form-control" 
                              rows="3"
                              onChange={handleOnChange}></textarea>
                  </div>
                  <label>Language: </label>
                  <div className="radio">
                    <label>
                      <input type="radio" 
                              name="language" 
                              value="vi"
                              checked={inputValues.language === "vi"}
                              onChange={handleOnChange}/>
                      Vietnamese
                    </label><br/>
                    <label>
                      <input type="radio" 
                              name="language" 
                              value="en" 
                              checked={inputValues.language === "en"}
                              onChange={handleOnChange}/>
                      English
                    </label>
                  </div>
                  
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"
                             name="checkStatus"
                             value={true}
                            //  checked={inputValues.checkStatus}
                             onChange={handleOnChange}/>
                      I agree to terms and conditions
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-primary">Delete</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
