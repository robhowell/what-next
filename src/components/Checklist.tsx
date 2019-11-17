import React from 'react';
import { IonCheckbox, IonList, IonItem, IonLabel, IonContent } from '@ionic/react';

const form = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

const Checklist: React.FC = () => (
  <IonContent>
    <IonList>
      { form.map(({val, isChecked}) => (
        <IonItem key={val}>
          <IonCheckbox slot="start" value={val} checked={isChecked} />
          <IonLabel>{val}</IonLabel>
        </IonItem>
      )) }
    </IonList>
  </IonContent>
);

export default Checklist