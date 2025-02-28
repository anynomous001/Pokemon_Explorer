import Navbar from '@/app/components/navbar'



interface HomelayoutProps {
    children: React.ReactNode
}


const Homelayout = ({ children }: HomelayoutProps) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Homelayout