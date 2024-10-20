import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Kieran's Page" />
        <IonButton>Hello!</IonButton>
        <h1>Hello World!</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
