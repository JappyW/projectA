import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { _getContactsCollection } from 'store/contacts/selectors';
import { fetchContacts, setContactsFilters } from 'store/contacts/actions';

const mapStateToProps = (state) => {
	return {
		contacts: _getContactsCollection(state)
	};
};

const mapDispatchToProps = {
	fetchContacts,
	setContactsFilters
};

const Contacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { Contacts };
