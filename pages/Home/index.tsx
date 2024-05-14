import HomeView from './view'
import EventData from '@/api'


const index=()=>{

    return(
        <HomeView eventData={EventData}  />
    )   
}

export default index