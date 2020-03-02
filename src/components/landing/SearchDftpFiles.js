import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

class SearchDftpFiles extends Component {
    render() {
        return (<div>Select DFTP File:<Autocomplete
            getItemValue={(item) => item.label}
            items={[
                { label: 'HLD123', key: 1 },
                { label: 'HLD124', key: 2 },
                { label: 'HLD125', key: 3 },
                { label: 'HLD126', key: 4 },
                { label: 'HLD127', key: 5 },
                { label: 'HLD128', key: 6 }
            ]}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
        /></div>);
    }
}

export default SearchDftpFiles;