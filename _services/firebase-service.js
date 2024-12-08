import { db } from "../_utils/firebase";
import { collection, getDocs, query, doc, setDoc } from "firebase/firestore";


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


export const updateItemAmount = async (userId, itemId, amount) => {
    const userDocRef = doc(db, 'users', userId);
    const itemDocRef = doc(userDocRef, 'items', itemId);
  
    await setDoc(itemDocRef, { amount }, { merge: true });
};


export async function getUserItems(userId) {  
    const q = query(
        collection(db, "users", userId, "items"),
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