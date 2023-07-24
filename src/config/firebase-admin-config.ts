import { initializeApp, getApps, cert } from "firebase-admin/app"

const { privateKey } = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY as string
)

const firebaseAdminConfig = {
  credential: cert({
    privateKey,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  }),
}

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig)
  }
}
