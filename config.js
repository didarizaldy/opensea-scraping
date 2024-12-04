const config = {
  ipfsMetadataSampleUrl:
    "https://ipfs.io/ipfs/QmaxEUs9LWYzJRWVwCe5G4m4DZzRoA7Ezvs7QkGmTR17fM/2151", // Metadata link from any edition in a collection
  collectionName: "uwucrew", // It's gonna be the collection folder name
  firstEditionId: 1, // First edition from collection
  lastEditionId: 1000, // Last Edition from collection
  collectionSize: 1000, // Collection's total size
  pageTimeout: 100000, // Maximum time to wait for each page to load. If you keep getting errors you can change this number to a bigger one
};

export default config;
