import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../../Firebase";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
