import firebaseConfig from "./firebaseConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import QuizModel from "./QuizModel";

import * as firebase from "firebase/app";

import { getDatabase, set, ref, get, child, onValue, remove } from "firebase/database";

import * as firebaseStorage from "firebase/storage";

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();
const storage = firebaseStorage.getStorage();

async function checkIfUsernameAlreadyExists(username) {
    const users = await get(child(ref(db), "users"));
    if (Object.values(users.val()).some((user) => username === user.username))
        return true;
    else
        return false;
};

async function createUserInFirebase(email, username, password) {
    const usernameAlreadyExists = await checkIfUsernameAlreadyExists(username);
    if (usernameAlreadyExists)
        throw new Error("Username already exists");
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username, photoURL: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" })
    return auth.currentUser;
}

async function firebaseModelPromise() {
    const highscoreData = await get(child(ref(db), "highscore"));
    if (highscoreData.exists()) {
        const highScoreListArray = Object.values(highscoreData.val());
        return new QuizModel(highScoreListArray);
    }
    return new QuizModel();
}

function updateFirebaseFromModel(model) {
    model.addObserver(async function (payload) {
        if (payload) {
            if (payload.hasOwnProperty("email")) {

                /* Remove users
                const users = await get(child(ref(db), "users"));
                Object.keys(users.val()).forEach(async key => {
                  console.log(key);
                  const userRef = ref(db, "users/" + key);
                  remove(userRef).then(() => {
                    console.log("removed");
                  });
                })
                */

                set(ref(db, "users/" + auth.currentUser.uid), {
                    email: payload.email,
                    username: payload.username,
                    allTimeScore: 0,
                    completedSeasons: 0,
                });
                set(ref(db, "highscore/" + auth.currentUser.uid), {
                    username: payload.username,
                    score: 0,
                    date:
                        new Date().getFullYear() +
                        "/" +
                        (new Date().getMonth() + 1) +
                        "/" +
                        new Date().getDate(),
                });
                const completedSeasonsRef = ref(db, "users/" + auth.currentUser.uid + "/completedSeasons");
                onValue(completedSeasonsRef, (firebaseData) => {
                    model.setSeasonsPlayed(firebaseData.val());
                });
            } else if (payload.hasOwnProperty("score")) {
                //let allTimeScore;
                const date =
                    new Date().getFullYear() +
                    "/" +
                    (new Date().getMonth() + 1) +
                    "/" +
                    new Date().getDate();

                const completedSeasons = await get(child(ref(db), "users/" + auth.currentUser.uid + "/completedSeasons"));

                set(
                    ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics/" + completedSeasons.val()),
                    {
                        score: payload.score,
                        date: date
                    }
                );
                if (completedSeasons.val() === 0) {
                    const seasonStatisticsRef = ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics");
                    onValue(seasonStatisticsRef, (firebaseData) => {
                        const seasons = Object.values(firebaseData.val());
                        if (seasons.length <= 5) {
                            model.setLast5Seasons(seasons.reverse());
                        }
                        else {
                            model.setLast5Seasons(seasons.slice(seasons.length - 5, seasons.length).reverse());
                        }
                    })
                }
                set(
                    ref(db, "users/" + auth.currentUser.uid + "/completedSeasons"),
                    completedSeasons.val() + 1
                );

                /*
                const snapshot = await get(
                    ref(db, "users/" + auth.currentUser.uid + "/allTimeScore")
                );
        
                if (snapshot.exists()) allTimeScore = snapshot.val();
        
                allTimeScore += score;
        
                set(
                    ref(db, "users/" + auth.currentUser.uid + "/allTimeScore"),
                    allTimeScore
                );
                */
               
                const snapshot = await get(child(ref(db), "highscore/" + auth.currentUser.uid + "/score"));

                if (payload.score >= snapshot.val()) {
                    set(
                        ref(db, "highscore/" + auth.currentUser.uid + "/score"),
                        payload.score
                    );
                    set(ref(db, "highscore/" + auth.currentUser.uid + "/date"), date);
                }
            }
            else if (payload.hasOwnProperty("signIn")) {
                const seasonStatisticsPath = await get(child(ref(db), "users/" + auth.currentUser.uid + "/seasonStatistics"));
                if (seasonStatisticsPath.exists()) {
                    const seasonStatisticsRef = ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics");
                    onValue(seasonStatisticsRef, (firebaseData) => {
                        const seasons = Object.values(firebaseData.val());
                        if (seasons.length <= 5) {
                            model.setLast5Seasons(seasons.reverse());
                        }
                        else {
                            model.setLast5Seasons(seasons.slice(seasons.length - 5, seasons.length).reverse());
                        }
                    })
                }
                const completedSeasonsRef = ref(db, "users/" + auth.currentUser.uid + "/completedSeasons");
                onValue(completedSeasonsRef, (firebaseData) => {
                    model.setSeasonsPlayed(firebaseData.val());
                });
            }
        }
    });
}
function updateModelFromFirebase(model) {
    const highscoreRef = ref(db, "highscore");
    onValue(highscoreRef, (firebaseData) => {
        model.setHighScoreList(Object.values(firebaseData.val()));
    });
}

async function upload(file, setLoading) {
    const fileRef = firebaseStorage.ref(storage, auth.currentUser.uid + '.png');

    setLoading(true);
    await firebaseStorage.uploadBytes(fileRef, file);
    const photoURL = await firebaseStorage.getDownloadURL(fileRef);
    updateProfile(auth.currentUser, { photoURL });
    setLoading(false);
}


async function signInWithPasswordAndEmail(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
}

export {
    firebaseModelPromise,
    updateFirebaseFromModel,
    updateModelFromFirebase,
    signInWithPasswordAndEmail,
    createUserInFirebase,
    upload
};
