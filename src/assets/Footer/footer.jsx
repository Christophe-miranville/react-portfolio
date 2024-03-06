import '../Footer/footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div>
                    <a href="https://www.linkedin.com/in/christophe-miranville" target="_blank" rel="noreferrer">
                    <img className='logo_socials' src="/LinkedIn_peach.png" alt="show_me_linkedin" /></a>
                </div>
                <div>
                <a href="https://github.com/Christophe-miranville" target="_blank" rel="noreferrer">
                    <img  className='logo_socials'src="/github_peach.png" alt="show_my_github" /> </a>
                </div>
                <div>
                <a href="mailto:christophe.miranville@laposte.net" target="_blank" rel="noreferrer">
                    <img  className='logo_socials'src="\little_mail_peach.png" alt="send_me_a_mail" /></a>
                </div>

            </div>
                <div>2024 © Christophe MIRANVILLE</div>
        </>
    )
};

export default Footer;