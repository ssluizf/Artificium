import { initializeApp, getApps, cert } from "firebase-admin/app"

const firebaseAdminConfig = {
  credential: cert(process.env.NEXT_PUBLIC_FIREBASE_SECRET_KEY as string),
}

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig)
  }
}
