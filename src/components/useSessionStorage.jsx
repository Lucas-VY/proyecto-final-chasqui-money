import { useState } from 'react';

export function useSessionStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.SessionStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })


    const setValue = value => {
        try {
            setStoredValue(value)
            window.SessionStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }
    return [storedValue, setValue]
}