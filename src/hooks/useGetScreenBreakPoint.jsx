import { useState, useEffect } from 'react'


const useGetScreenBreakPoint = () => {
    const [screen, setScreen] = useState(initialState)

    useEffect(() => {
        const initial = window.innerHeight

        function getScreenSize(current) {
            let screen = ""
            if (current <= 640) {
                screen = "sm"
            }
        }
        window.addEventListener("resize", getScreenSize)
        currentScreen
        return () => {
            cleanup
        }
    }, [input])

    return {screen}
}


export default useGetScreenBreakPoint


