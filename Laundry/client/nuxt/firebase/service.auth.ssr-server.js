import admin from 'firebase-admin'

const config = {"apiKey":"AIzaSyDqSXAyqrKZJj6zhY3AiaEdZnghBETq2Lw","authDomain":"laundry-93534.firebaseapp.com","databaseURL":"https:\u002F\u002Flaundry-93534.firebaseio.com","projectId":"laundry-93534","storageBucket":"laundry-93534.appspot.com","messagingSenderId":"791612764515","appId":"1:791612764515:web:66967d60845a2b16782356","measurementId":"G-L8YRMR4XX5"}

const simulateUserRecord = ({
  uid,
  email,
  email_verified: emailVerified,
  name: displayName
}) => ({
  uid,
  email,
  emailVerified,
  displayName
})

if (!admin.apps.length) {
  admin.initializeApp(config)
}

export default async ({ req, res }) => {
  if (!req || !req.headers.authorization) {
    return
  }

  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || ''
  const components = authorizationHeader.split(' ')
  const idToken = components.length > 1 ? components[1] : ''

  try {
    // Try to verify the id token, additionally checking if the token was revoked
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken.uid) {
      const authUser = simulateUserRecord(decodedToken)

      res.locals = {
        ...res.locals,
        user: {
          ...authUser,
					allClaims: decodedToken,
					idToken,
        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}
