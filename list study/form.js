import React, { Component } from 'react';
// import Header from './component/Header'
// import Product from './component/Product'
import './App.css'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtName: 'tuanbui0509',
      txtPass: '23040509',
      txtDesc: 'Tôi là Bùi Ngọc Tuấn',
      sltGender: 1,
      rdLang: 'vi',
      chkHobby: true,
    };
  }




  onHandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
    console.log(value);
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

  }

  render() {

    return (





      <>
        <div className="container mt-50">
          <div className="row">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label >Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name='txtName'
                      onChange={this.onHandleChange}
                      value={this.state.txtName}
                    />
                  </div>

                  <div className="form-group">
                    <label >Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name='txtPass'
                      onChange={this.onHandleChange}
                      value={this.state.txtPass}

                    />
                  </div>

                  <div className="form-group">
                    <label >Description</label>
                    <textarea
                      name='txtDesc'
                      onChange={this.onHandleChange}
                      className="form-control"
                      rows="3"
                      value={this.state.txtDesc}
                      required="required"></textarea>
                  </div>
                  <label>Gender</label>
                  <select
                    className="form-control"
                    name='sltGender'
                    value={this.state.sltGender}
                    onChange={this.onHandleChange}
                  >
                    <option value={0} >Nữ</option>
                    <option value={1} >Nam</option>
                  </select>
                  <br />
                  <label>Ngôn ngữ</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === 'en'}
                      />
                        &nbsp; Tiếng Anh
                      </label>  &nbsp;
                      <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="rdLang"
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === 'vi'}

                      />
                        &nbsp; Tiếng Việt
                      </label>
                  </div>
                  <br />
                  <label>Sở thích</label>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value={true}
                        name="chkHobby"
                        onChange={this.onHandleChange}
                       checked={this.state.chkHobby}
                      />
                        Bóng đá   &nbsp;
                      </label>

                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-danger">Xóa trắng</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default App;
