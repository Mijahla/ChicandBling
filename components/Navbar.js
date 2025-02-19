
const Navbar = ({phrase,setPhrase}) => {
    
    return(
        <div className="h-20 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* MOBILE*/}
            <div className="h-full flex items-center justify-between md:hidden">
            <div className="dancing-script-webname text-2xl tracking-wide">Chic & Bling</div>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap -8 h-full w-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <div className="flex items-center gap-3">
                <img src="/chiclogo.png" alt="" width={50} height={50}/>
                <div className="dancing-script-webname text-2xl tracking-wide">Chic & Bling</div>
                </div>
                
                <div className="satisfy-regular text-md">
                        Where Elegance Meets Sparkle - Elevate Your Style with Every Accessory!
                </div>
                </div>
                {/* RIGHT */}
                <div className="w-3/4 xl:w-1/3 flex items-center justify-between gap-8">
                <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-full py-2 px-4 rounded-xl"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar


