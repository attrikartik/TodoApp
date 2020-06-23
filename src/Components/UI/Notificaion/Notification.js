import { store } from 'react-notifications-component'

// eslint-disable-next-line 
export default Notification = (title,message,type) =>    store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "center",
    container: "center",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 100,
      onScreen: true
    }
  })