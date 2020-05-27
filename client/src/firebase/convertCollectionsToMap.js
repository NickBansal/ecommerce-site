export default collections => {
	const transformedCollections = collections.docs.map(docs => {
		const { title, items } = docs.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docs.id,
			title,
			items
		};
	});

	return transformedCollections.reduce((acc, value) => {
		acc[value.title.toLowerCase()] = value;
		return acc;
	}, {});
};
