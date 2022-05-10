require('dotenv').config()


if(!process.env.token && !process.env.KEY){
	throw new Error('No existe una configuración con ApiKey y con Token')

}

