import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import Checklist from '../components/Checklist'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      <Checklist/>
    </IonPage>
  );
};

export default Home;
