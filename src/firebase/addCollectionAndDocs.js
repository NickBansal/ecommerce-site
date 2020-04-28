import { firestore } from './utils';

export default async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach(item => {
		const newDocRef = collectionRef.doc();

		batch.set(newDocRef, item);
	});

	return batch.commit();
};
