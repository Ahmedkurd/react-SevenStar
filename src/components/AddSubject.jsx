import React from "react";

class AddSubject extends React.Component {
    render() {
      return (
    <form className="forms-sample" autoComplete="off">
                <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Title</label>
                    <div class="col-sm-8">
                    <input type="email" className="form-control" name="title" placeholder="Enter title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="Description" className="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Description" placeholder="Enter title"/>
                    </div>
                </div>
                <div class="form-group row">
                      <label className="col-sm-3 col-form-label">Image upload</label>
                      <div class="col-xs-8">
                         <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                      </div>
                      <div class="col-xs-2">
                      <button class="file-upload-browse btn btn-info" type="file">Upload</button>
                      </div>
                 </div>
                <button type="submit" className="btn btn-success mr-2">Send</button>
                <button className="btn btn-light">Cancel</button>
            </form>
      );
    }
  };
export default AddSubject;