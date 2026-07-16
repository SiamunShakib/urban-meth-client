import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const AddToCartBtn = ({ product }) => {
  const { user } = useAuth();
  const handleAddToCart = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const cartRef = collection(db, "cart");

      const q = query(
        cartRef,
        where("userEmail", "==", user.email),
        where("productId", "==", product._id)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docRef = snapshot.docs[0].ref;
        const data = snapshot.docs[0].data();

        await updateDoc(docRef, {
          quantity: data.quantity + 1,
        });

        toast.success("Product quantity updated!")
      } else {
        await addDoc(cartRef, {
          userEmail: user.email,
          productId: product._id,
          name: product.name,
          image: product.images[0],
          price: product.discountedPrice,
          quantity: 1,
          createdAt: serverTimestamp(),
        });
toast.success("Product added to cart.")
      }
    } catch (error) {
      toast.error("Failed to add product to cart.");
      console.error(error)
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="border py-2 bg-accent px-4 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;