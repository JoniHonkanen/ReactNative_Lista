import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';

import CardSection from './common/cardSection';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring(); //Tama riittaa animoimaan vaihdokset
    }

    renderDescription() {
        if (this.props.library.id === this.props.selectedLibraryId) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(this.props.library.id)} // Action -> index tiedostosta, lahettaa ID:n actionille
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.library.title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

function mapStateToProps(state) {
    return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);