import children from '../../../models/children'

export async function get(req, res) {

    try {
        const childList = await children.findAll({
            raw: true
        })
        res.end(JSON.stringify(childList))

    } catch (error) {

        return res.status(500).send(error.message);
    }

}