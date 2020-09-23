import { selector, atom } from 'recoil';
import axios from 'axios';

const theme = atom({
    key: 'currentTheme',
    default: 'dark'
})

const authUser = selector({
    key: 'auth-user',
    get: async () => {
        let user = null

        try {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            user = { user: data }
        } catch (e) {
            user = { user: e.message }
        }
        return user;
    }
})

export { authUser, theme }