import React from "react";
import axios, { post } from 'axios';

class AddSubject extends React.Component {
  constructor(props)
  {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.fileUpload = this.fileUpload.bind(this)
    // this.state={
    //   title:"",
    //   Description:"",
    //   pic:"",
    //   userid:"",
    //   date:""
    // }

  }

  onChangeValue(e)
  {
    const target = e.target;

    this.setState({
      [target.name]: e.target.value,
      [target.name]: e.target.value,
      [target.name]: e.target.value,
     

    });
   
  }
  fileUpload(file){
 
    //let filee =this.state.file;
    const url = 'http://localhost:5000/api/addsubject/upload';
    const formData = new FormData();
    formData.append('image',file);
    formData.append('name','test');
    const config = {
        headers: {
            // 'content-type': 'multipart/form-data'
        },
        data:formData
    }
    return  post(url, formData,config)
  }
  onFormSubmit(e){
   
    e.preventDefault(); // Stop form submit
    axios.post('http://localhost:5000/api/addsubject', this.state)
    .then(res => {
      console.log('ok');
     
    });
    debugger;
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data)});  
  }
    render() {
      return (
    <form className="forms-sample" autoComplete="off"  onSubmit={this.onFormSubmit}>
                <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Title</label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="title"  placeholder="Enter title" onChange={this.onChangeValue} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="Description" className="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Description" placeholder="Enter title" onChange={this.onChangeValue}/>
                    </div>
                </div>
                <div class="form-group row">
                      <label className="col-sm-3 col-form-label">Image upload</label>
                      <div class="col-xs-8">
                         
                      </div>
                      <div class="col-xs-2">
                      <input type="file" class="btn btn-outline-info btn-fw" name="pic" accept="image/*"  onChange={this.onChangeValue}/>
                      {/* <input class="file-upload-browse btn btn-info" type="file"  text="Upload" /> */}
                      </div>
                 </div>
                <button type="submit" className="btn btn-success mr-2">Send</button>
                <button className="btn btn-light">Cancel</button>
            </form>
      );
    }
  };

export default AddSubject;