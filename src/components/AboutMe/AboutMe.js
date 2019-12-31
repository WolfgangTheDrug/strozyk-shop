import React, {Component} from 'react';
import Me from './me.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className={'basic-bg'}>
                <p>
                    Cześć! Nazywam się Patryk Stróżyk, jestem twórcą marki STROZYK.
                Doświadczenie nabrałem kończąc szkołę 7 cm w Poznaniu z zakresu konstrukcji odzieży i szycia. Jednak współpracując z osobami z branży, a także szyjąc na własną rękę projekty są dopracowane do perfekcji.
                </p>
                <p>
                Projekty od Strozyk kierowane są dla osób pewnych siebie, lubiących wyróżniać się z tłumu. Więc jeśli jesteś osobą niebojącą się wychodzić poza standardowe ramy modowe to marka dla ciebie. Łączy w sobie jednocześnie estetykę projektanta z nowoczesnym nie szablonowym podejściem do mody.
                </p>
                <img alt={'strozyk'} src={Me} style={{width: "75%"}}/>
            </div>)
    }
}
export default AboutMe;