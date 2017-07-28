import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './listItem';

class LibraryList extends Component {

    //JOS LISTA NIIN NÄIN
    componentWillMount() { // REACT-NATIVEN DOKUMENTEISSA
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.datas);
    }

    renderRow(libraryData) {
        return <ListItem library={libraryData} />
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

//const mapStateToProps = state => {}
function mapStateToProps(state) {
    return { datas: state.libaries }
}

export default connect(mapStateToProps)(LibraryList);