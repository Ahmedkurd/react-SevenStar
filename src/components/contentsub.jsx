import React from "react";
// import axios, { post } from 'axios';
// import { Alert ,Progress } from 'reactstrap';
// import AlertMe from './AlertA';

class contentsub extends React.Component 
{
    constructor(props)
    {
    super(props)
    }
    render()
    {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                    <img src="" alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p><a  className="btn btn-primary" role="button">Button</a>
                            <a className="btn btn-default" role="button">Button</a></p>
                        </div>
                 </div>
                </div>
            </div>
        )
    }
};
export default contentsub;