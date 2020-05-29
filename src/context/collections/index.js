import { createContext } from 'react';

const CollectionsContext = createContext({ collection: null, error: null });

export default CollectionsContext;
