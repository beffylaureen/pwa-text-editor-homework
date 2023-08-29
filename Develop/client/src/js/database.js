
import { openDB } from 'idb';

// We will define a global constant for our database name so we don't mess it up anywhere
const DB_NAME = "jate"

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: 'id', autoIncrement: true });
      console.log("jate database created");
    },
  });

/*
  We need to add some code below which will take updated content and save it to IndexedDB.
*/
export const putDb = async (content) => {
  // First, create a variable, and set it to asyncronously await the opening of the database. Replace the items in all caps
  
  // TODO: Change YOUR_OPEN_DB_VAR to whatever variable name you wanT. Note that you'll then need to change any other occcurences of YOUR_OPEN_DB_VAR to the same variable name.
  const jateDB = await openDB("jate", 1);

  // TODO: Now create a variable for the transaction; again, this will be referenced below.
  const tx = jateDB.transaction("jate", "readwrite");

  // TODO: Now create a variable for the store
  const store = tx.objectStore("jate");

  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("Data saved to the database", result.value);
};

/*
  We need to add some code below which will get all content from IndexedDB.
*/
export const getDb = async () => {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  // You can duplicate the same lines of code from above, except that the transaction will be 'readonly'
  
  // TODO: Copy LINES 28, 31 and 34 above; the new line 31 code should be "readonly"

  // Leave the rest as-is
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('Data retrieved from the database', result.value)
    : console.log('Data not found in the database');

  return result?.value;
};

initdb();
