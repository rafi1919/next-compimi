import ChatView from './view'
import EventData from '@/api'


const index=()=>{

    return(
        <ChatView eventData={EventData}  />
    )   
}

export default index