import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideFirebaseApp(() => initializeApp({ projectId: "angular-tic-tac-toe-2025", appId: "1:561836788964:web:6537f45fb2ad04643470f1", storageBucket: "angular-tic-tac-toe-2025.firebasestorage.app", apiKey: "AIzaSyDcL6SPBsuqP7BcAKx6cwVQHG3TzmwBNVs", authDomain: "angular-tic-tac-toe-2025.firebaseapp.com", messagingSenderId: "561836788964", measurementId: "G-QTNDH4V2S3" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
