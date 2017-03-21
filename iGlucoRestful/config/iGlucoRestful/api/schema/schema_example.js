/*

Joi.validate(app_info, app_info_schema, function (err, value) { 
    if(err){
      res.negotiate(err,{code:"E_VALIDATION", message:"缺少参数或参数格式有问题"});
    }else {
      res.created(value);
    }
});

const intRating = Joi.number().integer().min(1).max(5);

const schema = Joi.object().keys({
    // Do you know any French people? yes or no (required)
    q1: Joi.boolean().required(),
    // Do you know any Parisians? yes or no (required if answered yes in q1)
    q2: Joi.boolean()
        .when('q1', { is: true, then: Joi.required() }),
    // How many french in paris do you know? 1-6, 6-10, 11-50 or 50+ (required if answered yes in q2)
    q3: Joi.string()
        .when('q2', { is: true, then: Joi.valid('1-5', '6-10', '11-50', '50+').required() }),
    // Rate 20% of most friendly Parisians, from how many people you know answered in q3, individually on 1-5 rating
    q4: Joi.array()
        .when('q3', {is: '1-5', then: Joi.array().min(0).max(1).items(intRating).required() })
        .when('q3', {is: '6-10', then: Joi.array().min(1).max(2).items(intRating).required() })
        .when('q3', {is: '11-50', then: Joi.array().min(2).max(10).items(intRating).required() })
        .when('q3', {is: '50+', then: Joi.array().min(10).items(intRating).required() }),
    // Rate remaining 80% of Parisians, from how many people you know answered in q3, individually on 1-5 rating
    q5: Joi.array()
        .when('q3', {is: '1-5', then: Joi.array().min(1).max(4).items(intRating).required() })
        .when('q3', {is: '6-10', then: Joi.array().min(4).max(8).items(intRating).required() })
        .when('q3', {is: '11-50', then: Joi.array().min(8).max(40).items(intRating).required() })
        .when('q3', {is: '50+', then: Joi.array().min(40).items(intRating).required().required() }),
    // Rate the reputation of Parisians in general, 1-5 rating
    q6: intRating.required()
});

const schema = Joi.object().keys({
    // Do you know any French people? yes or no (required)
    q1: Joi.boolean().required(),
    // Do you know any Parisians? yes or no (required if answered yes in q1)
    q2: Joi.boolean()
        .when('q1', { is: true, then: Joi.required() }),
    // How many french in paris do you know? 1-6, 6-10, 11-50 or 50+ (required if answered yes in q2)
    q3: Joi.string()
        .when('q2', { is: true, then: Joi.valid('1-5', '6-10', '11-50', '50+').required() }),
    // Rate 20% of most friendly Parisians, from how many people you know answered in q3, individually on 1-5 rating
    q4: Joi.array()
        .when('q3', {is: '1-5', then: Joi.array().min(0).max(1).items(intRating).required() })
        .when('q3', {is: '6-10', then: Joi.array().min(1).max(2).items(intRating).required() })
        .when('q3', {is: '11-50', then: Joi.array().min(2).max(10).items(intRating).required() })
        .when('q3', {is: '50+', then: Joi.array().min(10).items(intRating).required() }),
    // Rate remaining 80% of Parisians, from how many people you know answered in q3, individually on 1-5 rating
    q5: Joi.array()
        .when('q3', {is: '1-5', then: Joi.array().min(1).max(4).items(intRating).required() })
        .when('q3', {is: '6-10', then: Joi.array().min(4).max(8).items(intRating).required() })
        .when('q3', {is: '11-50', then: Joi.array().min(8).max(40).items(intRating).required() })
        .when('q3', {is: '50+', then: Joi.array().min(40).items(intRating).required().required() }),
    // Rate the reputation of Parisians in general, 1-5 rating
    q6: intRating.required()
});*/