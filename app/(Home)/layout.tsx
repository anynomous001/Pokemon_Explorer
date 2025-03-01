import Navbar from '@/app/components/navbar'
import { GridBackgroundDemo } from '@/components/grid-background-demo'



interface HomelayoutProps {
    children: React.ReactNode
}


const Homelayout = ({ children }: HomelayoutProps) => {
    return (
        <GridBackgroundDemo>
            <Navbar />
            {children}

        </GridBackgroundDemo>
    )
}

export default Homelayout