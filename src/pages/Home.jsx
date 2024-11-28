import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
    return (
      <div
        className="bg-fixed bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        {/* Overlay to improve readability de l'image de fond*/}
        <div className="bg-white bg-opacity-0 min-h-screen">
            
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-red-600 z-50 shadow-md">
                <div className="flex justify-center space-x-10 p-4">
                    <a href="#about" className="text-lg text-white hover:text-white bg-red-600 px-4 py-2 transform hover:-translate-y-1 transition duration-300">A propos</a>
                    <a href="#projects" className="text-lg text-white hover:text-white bg-red-600 px-4 py-2 transform hover:-translate-y-1 transition duration-300">Projets</a>
                    <a href="#skills" className="text-lg text-white hover:text-white bg-red-600 px-4 py-2 transform hover:-translate-y-1 transition duration-300">Compétences</a>
                    <a href="#contact" className="text-lg text-white hover:text-white bg-red-600 px-4 py-2 transform hover:-translate-y-1 transition duration-300">Contact</a>
                </div>
            </nav>

            {/* Sections */}
            <section id="about" className="relative w-full h-screen overflow-hidden flex flex-col items-start justify-center text-left py-20 pt-[10vh] pl-10 text-red-600">
                <h1 className="text-[clamp(2rem,5vw,4rem)] mb-2 text-4xl font-bold">LE DEVEHAT Tyfenn</h1>
                <p className="text-[clamp(1.2rem,3.5vw,2.5rem)] text-xl mt-2">Etudiante en informatique</p>
            </section>

            {/*Section projets avec carousel*/}
            <section id="projects" className="py-20 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Projets</h2>
            <div className="flex justify-center space-x-10">
                {/* Individual Cards */}
                <Card 
                image="Groupie_Tracker.png"
                titre="Groupie-Tracker"
                description="Groupie-Tracker est un projet qui catalogue les groupes de musique en utilisant une API. C'est projet a été fait en go."
                />
                <Card 
                image="Hangman_Web.png"
                titre="Hangman Web"
                description="Ce projet est un jeu du pendu fait un go."
                />
                <Card 
                image="Forum.png"
                titre="Forum"
                description="Ce projet est un forum de discussion utilisant go et des bases de Données."
                />
            </div>
            </section>
           
            <section id="skills" className="py-20 ">
            <h2 className="text-3xl font-bold text-center mb-8">Compétences</h2>
            <div className="flex justify-around items-center">
                {/* Example Skill */}
                {/* <div className="text-xl font-semibold">Lorem</div>  */}

                {/* CV Section with Image and Download Button */}
                <div className="text-center">
                {/* CV Image */}
              
                <img
                src="/CV-1.png"
                alt="CV"
                className="w-64 h-64 object-contain rounded-lg shadow-lg"
                />
                {/* Download Button */}
                <a
                    href="/CV-1.png"
                    download="CV_Tyfenn_Le_Devehat.pdf"
                    className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-300"
                >
                Télécharger le CV
                </a>
                </div>
            </div>
            </section>

    

            <section id="contact" className="py-20 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Me Contacter</h2>
            <form className="flex flex-col items-center space-y-4">
                <input
                type="text"
                placeholder="Email"
                className="p-2 border border-red-600 rounded w-1/2"
                />
                <textarea
                placeholder="Message"
                className="p-2 border border-red-600 rounded w-1/2 h-32"
                />
                <Button>Envoyer</Button>
            </form>
            </section>
        </div>
      </div>
    );
  }
  
  export default Home;