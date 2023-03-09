const handler = (req,res) => {
    const {method} = req
    switch(method){
        case 'GET':
            return res.status(200).json({message: 'Hello World'})
        case 'POST':
            return res.status(201).json({message: 'created'})
        default:
            return res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler