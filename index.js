// утилиты, общие для всех словарей

const log = console.log

let dict = process.argv.slice(1)[1]

let type = makeNameType(dict)
log('_DICT__', dict, type)

export function makeNameType(dict) {
    let type
    if (dict.slice(-2) == 'ος') type = 'ος'
    else if (dict.slice(-1) == 'ξ') type = 'ξ'
    else if (dict.slice(-3) == 'ία') type = 'ία'
    else if (dict.slice(-3) == 'ιον') type = 'ιον'
    else if (dict.slice(-3) == 'ός') type = 'ός'
    else if (dict.slice(-4) == 'ί̈α') type = 'ί̈α'
    else if (dict.slice(-1) == 'η') type = 'η'
    else if (dict.slice(-2) == 'ις') type = 'ις'
    else if (dict.slice(-1) == 'α') type = 'α'
    else if (dict.slice(-3) == 'όν') type = 'όν'
    else if (dict.slice(-4) == 'ῖον') type = 'ῖον'
    else if (dict.slice(-2) == 'ον') type = 'ον'
    else if (dict.slice(-3) == 'ίς') type = 'ίς'
    else if (dict.slice(-2) == 'ά') type = 'ά'
    else if (dict.slice(-1) == 'ψ') type = 'ψ'
    else if (dict.slice(-2) == 'ή') type = 'ή'
    else if (dict.slice(-3) == 'ών') type = 'ών'
    else if (dict.slice(-2) == 'ας') type = 'ας'
    else if (dict.slice(-3) == 'ήν') type = 'ήν'
    else if (dict.slice(-3) == 'άς') type = 'άς'
    /* else if (dict.slice(-3) == 'ήρ') type = 'ήρ' */
    /* else if (dict.slice(-1) == 'ρ') type = 'ρ' */ // ἀήρ
    else if (dict.slice(-3) == 'ώς') type = 'ώς'
    else if (dict.slice(-2) == 'ων') type = 'ων'
    else if (dict.slice(-4) == 'εύς') type = 'εύς'
    else if (dict.slice(-3) == 'άν') type = 'άν'
    else if (dict.slice(-2) == 'αρ') type = 'αρ'
    else if (dict.slice(-2) == 'ωρ') type = 'ωρ'
    else if (dict.slice(-2) == 'λς') type = 'λς' // ἅλς
    else if (dict.slice(-5) == 'ῆρες') type = 'ῆρες' // ἁλτῆρες
    else if (dict.slice(-2) == 'ως') type = 'ως'
    else if (dict.slice(-3) == 'ῆς') type = 'ῆς'
    else if (dict.slice(-2) == 'υς') type = 'υς'
    else if (dict.slice(-4) == 'ῖοι') type = 'ῖοι' // Ἀραμαῖοι - ioi
    else if (dict.slice(-3) == 'ύς') type = 'ύς'
    else if (dict.slice(-1) == 'υ') type = 'υ'
    else if (dict.slice(-2) == 'ος') type = 'ος'
    /* else if (dict.slice(-2) == 'ης') type = 'ης' */
    else if (dict.slice(-3) == 'ῦς') type = 'ῦς'
    else if (dict.slice(-3) == 'ῶς') type = 'ῶς'
    else if (dict.slice(-3) == 'οί') type = 'οί'
    else if (dict.slice(-2) == 'ῆ') type = 'ῆ'
    else if (dict.slice(-4) == 'ί̈ς') type = 'ί̈ς'
    else if (dict.slice(-3) == '') type = 'os'
    else if (dict.slice(-1) == 'ο') type = 'ο'
    else if (dict.slice(-3) == 'ῶν') type = 'ῶν'
    else if (dict.slice(-3) == '') type = 'os'
    else if (dict.slice(-2) == 'αι') type = 'αι'

    else if (dict.slice(-3) == 'της') type = 'της'
    else if (dict.slice(-2) == 'ης') type = 'ης'

    else if (dict.slice(-4) == 'τήρ') type = 'τήρ'
    /* else if (dict.slice(-3) == 'ήρ') type = 'ήρ' */
    else if (dict.slice(-1) == 'ρ') type = 'ρ'
    /* else if (dict.slice(-4) == 'τής') type = 'τής' */
    else if (dict.slice(-3) == 'ής') type = 'ής'

    else if (dict.slice(-4) == 'εἶ') type = 'εἶ' // εἶ
    else if (dict.slice(-2) == 'ην') type = 'ην'
    else if (dict.slice(-2) == 'ώ') type = 'ώ'

    else if (dict.slice(-4) == 'ἴς') type = 'xxx'
    else if (dict.slice(-2) == 'νς') type = 'νς' // ================== νς убрать
    else if (dict.slice(-2) == 'ες') type = 'ες'
    else if (dict.slice(-3) == 'ᾶς') type = 'ᾶς'
    else if (dict.slice(-3) == 'ές') type = 'ές'
    /* else if (dict.slice(-3) == 'ϊς') type = 'ϊς' */
    else if (dict.slice(-3) == 'ῖς') type = 'ῖς'
    else if (dict.slice(-4) == 'ὗς') type = 'xxx'
    /* else if (dict.slice(-6) == 'ὄϊς') type = 'xxx' */
    else if (dict.slice(-3) == 'ϊς') type = 'ϊς'
    else if (dict.slice(-3) == '') type = 'os'
    else if (dict.slice(-3) == '') type = 'os'

    else if (dict.slice(-3) == 'αί') type = 'αί'
    else if (dict.slice(-2) == 'οι') type = 'οι'
    else if (dict.slice(-2) == 'ῖ') type = 'ῖ'
    else if (dict.slice(-4) == 'λάλ') type = 'xxx'
    else if (dict.slice(-1) == 'ι') type = 'ι'
    else if (dict.slice(-2) == 'ᾶ') type = 'ᾶ'
    else if (dict.slice(-2) == 'ῦ') type = 'ῦ'
    else if (dict.slice(-4) == 'ὄν') type = 'ὄν'
    else if (dict.slice(-3) == 'ῦν') type = 'ῦν'
    else if (dict.slice(-2) == 'ί') type = 'ί'
    else if (dict.slice(-2) == 'ῶ') type = 'ῶ'
    else if (dict.slice(-2) == 'αν') type = 'αν'
    else if (dict.slice(-3) == 'έν') type = 'έν'
    else if (dict.slice(-4) == 'ῆεν') type = 'ῆεν'
    else if (dict.slice(-3) == '') type = 'os'
    else if (dict.slice(-3) == '') type = 'os'
    else if (dict.slice(-3) == '') type = 'os'

    return type
}
