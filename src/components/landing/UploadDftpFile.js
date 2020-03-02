import React, { Component } from 'react';

class UploadDftpFile extends Component {
    render() {
        return (<div style={{ width: '40%' }} className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01" style={{height:"38px"}}>
                    Upload
          </span>
            </div>
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose file
          </label>
            </div>
        </div>);
    }
}

export default UploadDftpFile;