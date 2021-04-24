import { useSelector } from 'react-redux';
import styles from './HomeView.module.css';
import { authSelectors } from '../../redux/auth';
import Modal from '../../components/Modal/Modal';
import Preloader from '../../components/Preloader/Preloader';

export default function HomeView() {
  const userName = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getEmail);
  const isAuthLoading = useSelector(authSelectors.getIsAuthLoading);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Phonebook, {userName ? userName : email ? email : 'Guest'}
        <span role="img" aria-label="Иконка приветствия"></span>
      </h1>
      {isAuthLoading && (
        <Modal>
          <Preloader />
        </Modal>
      )}
    </div>
  );
}
