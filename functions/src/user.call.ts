import * as functions from 'firebase-functions';
// import * as admin from "firebase-admin";
// import Utils from "./util/cf-helper-methods";


export const updateGoogleSheet = functions.https.onCall(async (data) => {
  try {
    return data
  } catch (error) {
    console.error(error);
    return error
  }
});
