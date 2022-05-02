const mLocales = require('./models/locales.model')
const mBebidas = require('./models/bebida.model')

const crear_locales = async (req, res) => {

    const locales = [
        { nombre: 'grietas', direccion: 'Calle 01' },
        { nombre: 'mosquito', direccion: 'Calle 01' },
        { nombre: 'dul_coruna', direccion: 'Calle 01' },
        { nombre: 'sham_rock', direccion: 'Calle 01' },
        { nombre: 'studio_80', direccion: 'Calle 01' },
        { nombre: 'garibaldi', direccion: 'Calle 01' },
        { nombre: 'claro_boba', direccion: 'Calle 01' }
    ]
    for (let idx = 0; idx < locales.length; idx++) {
        const local       = locales[idx]
        const local_nuevo = new mLocales(local)
        await local_nuevo.save()
    }

    res.send('ok') 
}

const crear_bebidas = async(req, res) =>{

    const bebidas = [
        {nombre: 'Estrella Galicia', tipo: 'cerveza'},
        {nombre: 'Amstel', tipo: 'cerveza'},
        {nombre: 'San Miguel', tipo: 'cerveza'},
        {nombre: 'Cruzcampo', tipo: 'cerveza'},
        {nombre: 'Super Bock', tipo: 'cerveza'},
    ]
    for (let idx = 0; idx < bebidas.length; idx++) {
        const bebida       = bebidas[idx]
        const nueva_bebida = new mBebidas(bebida)
        await nueva_bebida.save()
    }
    res.send('ok')
   
}

exports.crear_bebidas = crear_bebidas
exports.crear_locales = crear_locales