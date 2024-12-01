import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      {/* Opacite du fond */}
      <div className="bg-white bg-opacity-0 min-h-screen">
        {/* Navigation */}
        <nav className="md:fixed top-0 left-0 w-full bg-red-800 z-50 shadow-md">
          <div className="flex flex-wrap justify-center space-x-4 p-4">
                <a href="#about" className="text-lg text-white hover:bg-red-800 px-4 py-2 rounded-md hover:translate-y-[-2px] transition-all">A propos</a>
                <a href="#projects" className="text-lg text-white hover:bg-red-800 px-4 py-2 rounded-md hover:translate-y-[-2px] transition-all">Projets</a>
                <a href="#skills" className="text-lg text-white hover:bg-red-800 px-4 py-2 rounded-md hover:translate-y-[-2px] transition-all">Compétences</a>
                <a href="#contact" className="text-lg text-white hover:bg-red-800 px-4 py-2 rounded-md hover:translate-y-[-2px] transition-all">Contact</a>
          </div>
        </nav>

        {/* Section Presentation */}
        <section className="relative w-full h-screen flex flex-col items-start justify-center text-left py-20 pt-[15vh] px-6 sm:px-10 text-red-800">
          <h1 className="text-[clamp(2rem,5vw,4rem)] mb-2 font-bold">LE DEVEHAT Tyfenn</h1>
          <p className="text-[clamp(1.2rem,3.5vw,2.5rem)]">Étudiante en informatique</p>
        </section>

        {/* Section A Propos */}
        <section id="about" className="py-20 bg-white px-6 sm:px-10">
            <h1 className="text-[clamp(2rem,5vw,4rem)] mb-6 font-bold text-center text-red-800">À propos de moi</h1>
            <div className="flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <img src="photo.JPG" alt="photo" className="w-40 h-40 object-cover rounded-lg shadow-lg md:self-center"/>
                <div className="text-sm sm:text-base md:text-left text-gray-600">
                    <p className="mb-2">Bonjour,</p>
                    <p>Je suis actuellement en B2 Informatique à Rennes Ynov Campus et je suis à la recherche d'un stage de 6 semaines ou plus dans le développement web.</p>
                </div>
            </div>
        </section>

        {/* Section Projets */}
        <section id="projects" className="relative w-full py-20 px-6 sm:px-10 text-red-800">
            <h2 className="text-[clamp(2rem,5vw,4rem)] mb-6 font-bold text-center">Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card
                image="Groupie_Tracker.png"
                titre="Groupie-Tracker"
                description="Groupie-Tracker est un projet qui catalogue les groupes de musique en utilisant une API. C'est projet a été fait en go, html et css."
                />
                <Card
                image="Hangman_Web.png"
                titre="Hangman Web"
                description="Ce projet est un jeu du pendu fait en go."
                />
                <Card
                image="Forum.png"
                titre="Forum"
                description="Ce projet est un forum de discussion utilisant go, html, css et des bases de données."
                />
            </div>
        </section>

        {/* Section Competences */}
        <section id="skills" className="py-20 bg-gray-50 px-6 sm:px-10 text-red-800">
            <h2 className="text-[clamp(2rem,5vw,4rem)] mb-6 font-bold text-center ">Compétences</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    <div className="md:w-1/2 text-center mb-4">
                        <h3 className="text-2xl font-semibold">Front End:</h3>
                        <p>JavaScript</p>
                        <h3 className="text-2xl font-semibold">Back End:</h3>
                        <p>PHP, Go</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center">
                        <img src="/CV-1.png" alt="CV" className="w-full h-auto object-contain rounded-lg shadow-lg h-[100px] w-auto"/>
                        <a href="/CV-1.png" download="CV_Tyfenn_Le_Devehat.pdf" className="mt-4 px-4 py-2 bg-red-800 text-white rounded-lg shadow-md hover:bg-red-800 hover:translate-y-[-2px] transition-all">Télécharger le CV</a>
                    </div>
            </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-20">
            <h2 className="text-[clamp(2rem,5vw,4rem)] mb-6 font-bold text-center text-red-800">Me Contacter</h2>
            <form className="flex flex-col items-center space-y-4 px-4 sm:w-2/3 md:w-1/2 mx-auto text-gray-600 netlify">
                <input type="hidden" name="form-name" value="contact"/>
                <p className="sm:text-base md:text-left">Votre adresse email:</p>
                <input type="text" placeholder="example@gmail.com" className="p-2 border border-red-800 rounded w-full"/>
                <p>Votre message:</p>
                <textarea placeholder="Message" className="p-2 border border-red-800 rounded w-full h-32"/>
                <Button>Envoyer</Button>
            </form>
        </section>
      </div>
    </div>
  );
}

export default Home;