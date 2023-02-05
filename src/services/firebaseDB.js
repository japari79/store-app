import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2xAi_wbAYawEcPimN_WRNpLKadSBUhSc",
    authDomain: "ja-react-db.firebaseapp.com",
    projectId: "ja-react-db",
    storageBucket: "ja-react-db.appspot.com",
    messagingSenderId: "686905604541",
    appId: "1:686905604541:web:d742b54e1f053b6fde3ad4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GetProducts() {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map((elem) => {
        let product = elem.data();
        product.id = elem.id;

        return product;
    });
    return products;
}

export async function GetProductDetail(pId) {
    const productsRef = collection(db, "products");
    const docRef = doc(productsRef, pId);
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id: snapshot.id};
}

export async function GetProductByCategory(pCategory) {
    const productsRef = collection(db, "products");
    const qry = query(productsRef, where("category", "==", pCategory));
    const snapshot = await getDocs(qry);
    const products = snapshot.docs.map((elem) => {
        let product = elem.data();
        product.id = elem.id;

        return product;
    });
    return products;
}

export async function PostCreateOrder(pOrder) {
    const orderRef = collection(db, "orders");
    
    let order = await addDoc(orderRef, pOrder);
    return order.id;
}

export default db;