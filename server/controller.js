module.exports ={
    create: (req,res,next) => {
        const db = req.app.get('db')
        const {name, price, imgUrl} =req.body
        db.create_products([name, price, imgUrl])
            .then(response => {
                console.log(response)
                res.status(200).send(response)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
    
    getAll: (req,res,next) => {
        const db = req.app.get('db')
        db.read_products()
            .then(products => {
                console.log(products)
                res.status(200).send(products)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
   
    del: (req,res,next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_products(id)
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    }
}