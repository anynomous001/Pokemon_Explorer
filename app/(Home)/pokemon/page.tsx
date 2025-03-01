import CardContainer from "@/app/components/card-container"
import { GridBackgroundDemo } from "@/components/grid-background-demo"


const Home = () => {
    return (
        <GridBackgroundDemo>
            <div className="h-full py-10 relative antialiased p-4">
                <CardContainer />
            </div>
        </GridBackgroundDemo>
    )
}

export default Home