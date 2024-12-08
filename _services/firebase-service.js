import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";

export async function getItem(userId) {  
    const q = query(
        collection(db, "users", userId, "items"),
        where("quantity", ">=", 1)
    );

    let temp = []
    
    try {
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        });

        return temp;
        
    } catch (error) {
        console.error("Error getting items:", error);
        return [];
    }
}

export async function addItem(userId, item){
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
}

export async function fetchList(){
    const q = query(
        collection(db, "products")
    );

    let result = []
    
    try {
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            result.push({id: doc.id, ...doc.data()});
        });

        return result;
        
    } catch (error) {
        console.error("Error getting items:", error);
        return [];
    }
}