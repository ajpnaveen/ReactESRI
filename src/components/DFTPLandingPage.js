import React, { Component } from 'react';
import SearchDftpFiles from '../components/landing/SearchDftpFiles';
import UploadDftpFile from '../components/landing/UploadDftpFile';
import DownloadDftpFile from '../components/landing/DownloadDftpFile';
import "../components/style.css";

class DFTPLandingPage extends Component {
    render() {
        return (<div className="flex-container">
            <SearchDftpFiles style={{ flexGrow: 4}}/>
            <UploadDftpFile  style={{ flexGrow: 8}}/>
            <DownloadDftpFile  style={{ flexGrow: 2}}/>
        </div>);
    }
}

export default DFTPLandingPage;