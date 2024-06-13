import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";
import Email from "next-auth/providers/email";

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  data: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
  },
) {
  const q = query(collection(firestore, "users"), where("email", "==", data.email));
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: false, statusCode:400, message: "Email alredy exists" };
  } else {
    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode:200, message: "Register Success" };
    } catch (error) {
      return { status: false, statusCode:400, message: "Register Failed" };
    }
  }
}

// cara menghubungkan login systes yang sudah pernah di buat dengan data yang sudah di register kan di database

export async function login(data: {email:string}) {
  const q = query(
  collection(firestore , "users"),
  where("email", "==", data.email),
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  if(user) {
    return user[0];
  } else {
    return null;
  }

}












