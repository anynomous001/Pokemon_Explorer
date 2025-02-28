import CardContainer from "@/app/components/card-container"
import { BackgroundBeams } from "@/components/ui/background-beams"


const Home = () => {
    return (
        <div className="h-full relative bg-neutral-950 antialiased p-4">
            <CardContainer />
            <BackgroundBeams />
        </div>
    )
}

export default Home