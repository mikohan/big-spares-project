// settings for header
const header = 'classic' // Variants 'spaceship' : 'classic'
const color = 'blue' // Variants 'red' : 'blue'




// server settings
const mode = 'local' // Options remote | local  From where getting data



// Exporting stuff
export  { header, color, mode }

export const endpointBase =  mode === 'local' ? 'http://localhost:8000' : 'https://partshub.tk'