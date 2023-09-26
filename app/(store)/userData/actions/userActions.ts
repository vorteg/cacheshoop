import { useUserStore } from '../slices/userSlice'

export const addAddress = (address:string) => useUserStore.setState({address:address})

export const getAddress = () => useUserStore.getState()