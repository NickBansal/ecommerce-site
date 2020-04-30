import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../../../redux/directory/selectors';

import Overview from '../../../../pages/Shop/Overview';
import WithSpinner from '../../../WithSpinner';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionLoaded
});

export default compose(connect(mapStateToProps), WithSpinner)(Overview);
