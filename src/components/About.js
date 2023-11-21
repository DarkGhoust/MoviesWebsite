
function About() {
    return (
        <div className="page">
            <section className="flex overflow-hidden relative hero flex-col justify-end rounded-2xl bg-slate-600 pb-5 pt-20 px-7 mb-1 bg-cover"
                style={{backgroundImage: `url("https://img.freepik.com/free-photo/assortment-cinema-supplies_23-2147803976.jpg?w=1060&t=st=1700145238~exp=1700145838~hmac=41bf4ec655250a12b03cf363f33a359d8ba587e61b96e2196efbb14f2f72dd67")`}}>
                    <div className="z-[2]">
                        <h2 className="text-3xl font-bold mb-4">About This Project: <br/>A Developer's Pet Project for Portfolio Showcase</h2>
                        <p className="mb-2">Welcome to MovieMingle, a passion-driven endeavor crafted as a personal project for my portfolio. 
                        This website is a testament to my skills and creativity, serving as a showcase of my abilities as a developer. 
                        Built from the ground up with dedication and enthusiasm, this project not only reflects my technical proficiency but also highlights 
                        my commitment to continuous learning.</p>

                        <p className="mb-2">Using cutting-edge technology and a keen eye for design, I've seamlessly integrated an external 
                        API to scrape valuable information, enhancing the functionality and richness of the content. The utilization of this API demonstrates 
                        my versatility and adaptability in implementing external resources to create a more dynamic and engaging user experience.</p>

                        <p className="mb-2">Explore this project to witness the synergy of coding expertise, design aesthetics, and a genuine 
                        passion for innovation. Whether you're here for inspiration or curiosity, I hope this project leaves a lasting impression on you as it 
                        has on me during its development.</p>
                    
                    </div>
            </section>
            <i className="text-right text-sm mb-8 block">Image by <a target="_blank" href="https://www.freepik.com/free-photo/assortment-cinema-supplies_2337193.htm#query=movies%20background&position=12&from_view=search&track=ais&uuid=7b5c4adc-f3ba-44bb-8619-27123d45c766">Freepik</a></i>

        </div>
    )
}

export default About
