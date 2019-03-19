import React from "react";
import axios, { post } from 'axios';
import { Alert ,Progress } from 'reactstrap';
import AlertMe from './AlertA';



class AddSubject extends React.Component {
  constructor(props)
  {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.uploadChange = this.uploadChange.bind(this);
 
    this.state = {
      visible: false,
      progressV:0
    };
    this.onDismiss = this.onDismiss.bind(this);

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
     
    });
   
  }
  uploadChange(e)
  {
    const target = e.target;
    this.setState({ 
      [target.name]:e.target.value,
      'file': e.target.files[0]});
      
  }
  onFormSubmit(e){
   
    e.preventDefault(); // Stop form submit
    // axios.post('http://localhost:5000/api/addsubject', this.state)
    // .then(res => {
    //   console.log('ok');
     
    // });
    const formData = new FormData();
    formData.append(
      'Image',
      this.state.file,
      this.state.file.name
    );
    formData.append('Data',JSON.stringify(this.state));
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
            
        },
        onUploadProgress: progressEvent =>this.setState({progressV:progressEvent})
    };

    
   
    axios.post("http://localhost:5000/api/addsubject/upload",formData, { progress: (progressEvent) => {
      if (progressEvent.lengthComputable) {
         console.log(progressEvent.loaded + ' ' + progressEvent.total);
         this.setState({progressV:progressEvent});
      
      } 
     }
    })
        .then((response) => {
            console(response);
        }).catch((error) => {
    });
  
   
    
    document.getElementById("frmaddSubject").reset();
    this.setState({
      "title": "",
      "Description": "",
      "pic":"",
      "file":"",
      "progressV":0
    });
    this.setState({visible:true});
  
  }
  onDismiss()
  {
    this.setState({ visible: false });
  }
    render() {
      return (
       
    <form id="frmaddSubject" className="forms-sample" autoComplete="off"  onSubmit={this.onFormSubmit}>
     <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
           Subject Added
       </Alert>
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
                      <input type="file" class="btn btn-outline-info btn-fw" name="pic" accept="image/*"  onChange={this.uploadChange}/>
                      {/* <input class="file-upload-browse btn btn-info" type="file"  text="Upload" /> */}
                      </div>
                 </div>
                <button type="submit" className="btn btn-success mr-2">Send</button>
                <button className="btn btn-light">Cancel</button>
                <br/>   <br/>
                <Progress animated color="info" value={this.state.progressV} />

            </form>
      );
    }
  };

export default AddSubject;