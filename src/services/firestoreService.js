/*
  FIRESTORE SERVICE STUB
  ----------------------
  This file contains the Firestore helper surface for a real Firebase setup.
  The project currently runs in DEMO_MODE by default.

  To enable real Firestore, install Firebase and uncomment the import calls below.
*/

/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { FIREBASE_CONFIG } from '../config/firebase.js';

const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);
const COLLECTION = 'registrations';

export async function firebaseGetAll() {
  const q = query(collection(db, COLLECTION), orderBy('time', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((docItem) => ({ id: docItem.id, ...docItem.data() }));
}

export async function firebaseAdd(data) {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    time: new Date().toISOString(),
  });
  return docRef.id;
}

export async function firebaseDelete(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
*/

export async function firebaseGetAll() {
  throw new Error('Firestore is not configured. Set DEMO_MODE=false and enable real Firebase imports.');
}

export async function firebaseAdd() {
  throw new Error('Firestore is not configured. Set DEMO_MODE=false and enable real Firebase imports.');
}

export async function firebaseDelete() {
  throw new Error('Firestore is not configured. Set DEMO_MODE=false and enable real Firebase imports.');
}
