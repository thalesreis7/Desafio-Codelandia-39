import './Header.css'

export default function Header() {
  return (
    <header>
        <nav className="navegation">
            <a href="">
                <img src="../../src/assets/img/FacebookLogo.svg" alt="logo do facebook" />
            </a>
            <a href="">
                <img src="../../src/assets/img/TwitterLogo.svg" alt="Logo do Twitter" />
            </a>
            <a href="">
                <img src="../../src/assets/img/TwitchLogo.svg" alt="Logo da Twitch" />
            </a>
            <a href="">
                <img src="../../src/assets/img/DiscordLogo.svg" alt="Logo do discord" />
            </a>
        </nav>
        <p className="name">blogames</p>
        <div className="boxUser">
            <a href="">
                <img src="../../src/assets/img/User.svg" alt="user acount" />
            </a>
            <a href="">
                <img src="../../src/assets/img/MagnifyingGlass.svg" alt="Lupa" />
            </a>
            <a href="">
                <img src="../../src/assets/img/List.svg" alt="menu burguer" />
            </a>
        </div>
    </header>
  )
}
