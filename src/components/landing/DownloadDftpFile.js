import React, { Component } from 'react';

class DownloadDftpFile extends Component {
    render() {
        return (<div><button className="btn" style={{ height:"38px", backgroundColor: 'DodgerBlue', 
        'border': 'none', 'color': 'white', cursor: 'pointer', fontSize: '20px' }}><i className="fa fa-download"></i> Download</button></div>);
    }
}

export default DownloadDftpFile;
