import styles from './EmptyMessage.module.css'
import ChatIcon from '../../assets/chat-icon.svg'

const EmptyMessage =()=>{
    return(
        <div className={styles['chat-container']}>
            <div className={styles['content']}>
            <img src={ChatIcon} alt="Chat Icon" className={styles['chat-icon']} />
            <p>Select a contact to send messages</p>
            </div>
            
        </div>
    )
}
export default EmptyMessage