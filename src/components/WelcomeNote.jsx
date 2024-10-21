import styles from "./WelcomeNote.module.css"
import { FaPersonRunning } from "react-icons/fa6";

function WelcomeNote(){
  return <>
    <p className={styles.welcome}>Enjoy your Day !!! <FaPersonRunning /></p>
  </>
}

export default WelcomeNote;