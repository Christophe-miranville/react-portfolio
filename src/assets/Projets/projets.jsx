import '../Projets/projets.css'

const Projets = () => {
    return (
        <>
            <h4>Projets</h4>

            <div className='projet_container'>
                <a href="https://oplusoffrant.netlify.app/" target="_blank" rel="noreferrer">
                    <img className='projet_img' src="\Logo_oplusoffrant.png" alt="" />
                </a>

                <div className='projet'>
                    <p>
                        J'ai collaboré sur le front de notre projet de fin d'étude tout en collaborant avec notre équipe back. <br />
                        O Plus Offrant est une site de vente aux enchères.
                        Le logo a été généré par une I.A. et le nom sort de mon imagination.
                    </p>
                    <p className='experience'>
                        Ce que ce projet m'a apporté :<br />
                        Travail d'équipe en méthode AGILE. <br />
                        Les tâches et focntionnalités sont conforment au Titre Professionnel de DWWM. <br />
                    </p>
                    <p>
                        Mes tâches sur ce projet étaient essentiellement sur : <br />
                        - la page [articles], le design (HTML & CSS), mettre en place les fonctions de tri, la pagination. (REACT) <br />
                        - la page [d'acceuil], faire en sorte que lorsqu'on clique sur une catégorie nous sommes redirigés <br />
                        sur la page [articles] avec uniquement les articles de la catégories cliqué par l'utilisateur. (REACT)
                        - la page [vendre], le design (HTML & CSS).
                    </p>
                </div>
            </div>
            <div className='projet_container'>

                <a href="https://diagnoz.immo/" target="_blank" rel="noreferrer">
                    <img className='projet_img' src="\Logo DiagnOz couleur.png" alt="" />
                </a>

                <div className='projet'>
                    <p>
                        Ce projet, c'est mon premier client en Freelance.<br />
                        Il s'est présenté pendant ma préparation au Titre Professionnel.
                        J'ai dû planifier l'organisation afin de ne pas en délaisser un.
                        C'est une landing page afin d'effectuer une demande de rendez-vous pour un diagnostic immobilier.
                        Il sera utilisé aussi sur les tablettes des salariés du client.
                    </p>
                    <p className='experience'>
                        Ce que ce projet m'a apporté :<br />
                        Premier client, premier stress a gérer, des responsabilités vis a vis du client. <br />
                        Répondre aux éxigences du client, débuguer ses clients et fixer les bugs suite au déploiement.
                    </p>

                    <p>
                        Mes tâches sur ce projet étaient essentiellement sur : <br />
                        L'entièreté du projet car j'étais l'unique développeur freelance.
                    </p>
                </div>
            </div>
            <div className='projet_container'>
                <a href="https://kmpix.fr/" target="_blank" rel="noreferrer">
                    <img className='projet_img' src="\pngsecours.png" alt="" />
                </a>

                <div className='projet'>
                    <p>
                        C'est un projet personnel et professionnel. <br />
                        En effet, je suis aussi auto-entrepreneur en activités photographiques. <br />
                        J'avais un ancien site créé sous Wordpress en 2019 mais je n'avais aucune connaissance en développement web. <br />
                        J'ai voulu rapidement en développer un avec des languages que je venais d'apprendre ainsi que la création d'un formulaire de contact. <br />
                    </p>
                    <p className='experience'>
                        Ce que ce projet m'a apporté :<br />
                        Celà m'a permis de voir que je pouvais faire ce que je voulais en fait.
                        J'ai pu essayer plusieurs outils. <br />
                        Et beaucoup de choix = beaucoup d'hésitations. <br />
                        Je préfère quand un client me fournit une maquette ou je peux fournir une maquette simple.
                    </p>

                    <p>
                        Mes tâches sur ce projet étaient essentiellement sur : <br />
                        L'entièreté du projet car j'étais l'unique développeur pour ce projet personnel.
                    </p>
                </div>
            </div>

            <h4>Projets futurs</h4>

            <div className='projet_container'>
                {/* <a href="" target="_blank" rel="noreferrer">
                </a> */}
                <img className='projet_img' src="\logo_amulette.png" alt="" />
                <div className='projet'>
                    Site E-commerce <br />
                    Vente de ceramique artisanale en serié limitée dans le Sud-Ouest de la France. <br />
                    Influence Pop-culture. Vente à distance disponible
                </div>
            </div>

            <div className='projet_container'>
                {/* <a href="" target="_blank" rel="noreferrer">
                </a> */}
                <img className='projet_img' src="\logo_fred.jpg" alt="" />
                <div className='projet'>
                    Site vitrine pour une entreprise d'evenementiel <br />
                    Prestataire de sonorisation, éclairage et booking DJ
                </div>
            </div>
            <div className='projet_container'>
                {/* <a href="" target="_blank" rel="noreferrer">
                </a> */}
                <img className='projet_img' src="\logo_daniel.png" alt="" />
                <div className='projet'>
                    Site de réservation pour un VTC Premium sur la Côte d'Azur et MONACO.<br />
                    Possibilité de réserver un trajet avec estimation du coût selon, le véhicule, le jour et horaire du trajet.
                </div>
            </div>

        </>
    )
};

export default Projets;