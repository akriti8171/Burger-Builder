import axios from 'axios'

const instance=axios.create({
    baseURL:"https://happy-burger-fdacb.firebaseio.com/"
})

export default instance
