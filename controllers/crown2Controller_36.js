const serviceCrown2Controller_36 = require('./serviceCrown2Controller_36')

exports.getCategories = async (req, res) => {
    try {
        let results = await serviceCrown2Controller_36.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_36', {
            data: results,
            title: 'crown2_36',
            name: 'Xiwei SUN',
            id: '209410736',
        });
    } catch (err) {
        console.log('crown2Controller getCategories', err);
    }
}