import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import Checklist from '../components/Checklist'

const Home: React.FC = () => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>What Next</IonTitle>
        </IonToolbar>
      </IonHeader>

      <Checklist/>
    </IonPage>
  );

export default Home;
