const json = process.argv[2]

const parsePromised = () => new Promise((resolve, reject)=> {
    try{
        const result = JSON.parse(json)
        resolve(result)
    }catch (err){
        throw err
    }
})

parsePromised()
    .then(console.log)
    .catch(err => console.log(err.message))
