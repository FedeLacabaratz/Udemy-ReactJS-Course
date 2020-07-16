const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);
    
    // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Si hay resultados, generar los archivos estaticos
    const propiedades = await resultado.data.allStrapiPropiedades.nodes;

    // Crear los templates de propiedades
    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/Propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    })
};