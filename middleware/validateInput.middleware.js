const validateTask = (req, res, next) => {
    console.log(typeof  typeof req.body);
    const {title, description, completed} = req.body;

    console.log(title , description)
    let errorMessage = []
    if (!title || !description) {
        errorMessage.push('title and description are required.');
    }

    if (typeof completed != 'boolean'){
        errorMessage.push('completed should be a boolean value.');

    }

    // if (typeof id != 'boolean'){
    //     errorMessage.push('completed should be a boolean value.');

    // }
    
    if (errorMessage.length > 0){
        return res.status(400).send({'error' : errorMessage});
    }
    next();
  };


module.exports = validateTask;