// script.js
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;

  // Display the user information in the HTML
  document.getElementById('displayName').textContent = displayName || 'N/A';
  document.getElementById('email').textContent = email || 'N/A';
  document.getElementById('photoURL').textContent = photoURL || 'N/A';
  document.getElementById('emailVerified').textContent = emailVerified ? 'Yes' : 'No';
  document.getElementById('uid').textContent = uid || 'N/A';
} else {
  // Handle the case where there is no user signed in
  document.getElementById('user-info').textContent = 'No user is signed in';
}
