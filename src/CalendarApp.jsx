import { BrowserRouter } from "react-router-dom"
import { CalendarPage } from "./calendar/pages/CalendarPage"
import { AppRouter } from "./router"

export const CalendarApp = () => {
    return (
        <BrowserRouter>
            <AppRouter></AppRouter>
        </BrowserRouter>
    )
}