import '../Presentation/presentation.css'

const Presentation = () => {
    return (
        <>
            <section >
                <h3>Presentation</h3>
                <img className='profil_picture' src="\photo_de_profil.jpg" alt="photo_de_profil" />
                <p className='presentation'>
                    Bienvenue sur mon portfolio. <br />
                    J'ai récemment entrepris ma reconversion profesionnelle en tant que développeur web.
                    Mon but est de monter en compétences jusqu'au diplôme de niveau Bac +5 grâce à l'alternance ou en candidat libre.
                    L'informatique et les nouvelles technologies m'ont toujours intéressés depuis mon enfance.
                    A monter des PC en regardant des tutoriels en 56K, puis un peu de gaming avec WoW avec l'adsl.
                </p>
            </section>


            <section className='technologies'>
                <div className='col1'>

                    <h4>Langages de Programmation</h4>
                    <li>
                        HTML
                    </li>

                    <li>
                        NodeJS (Express)
                    </li>
                    <li>
                        CSS
                    </li>

                    <li>
                        JavaScript
                    </li>
                    <li>
                        REACT
                    </li>
                </div>


                <div className='col2'>
                    <h4>Base de Données</h4>
                    <li>
                        PostegreSQL
                    </li>
                    <li>
                        SQL
                    </li>

                    <h4 className='tools'>
                    Outils
                    </h4>
                    <li>
                        Git
                    </li>
                    <li>
                        GitHub (link)
                    </li>

                    <h4>Méthode</h4>
                    <li>
                        AGILE
                    </li>
                    <li>
                        MERISE (MCD/MLD)
                    </li>
                </div>

            </section>
        </>
    )
};

export default Presentation;