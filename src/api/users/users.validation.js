const Joi = require('joi');

class UserValidation {}

UserValidation.createUser = Joi.object({
  userName: Joi.string()
    .label('Username')
    .pattern(/[a-zA-Z].*[a-zA-Z]/)
    .message('Please enter a valid {#label}')
    .required()
    .messages({
      'any.required': '{#label} is required',
    }),
  emailId: Joi.string()
    .label('EmailId')
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .message('Please enter a valid {#label}')
    .required()
    .messages({
      'any.required': '{#label} is required',
    }),
  firstName: Joi.string()
    .label('Firstname')
    .pattern(/[a-zA-Z].*[a-zA-Z]/)
    .message('Please enter a valid {#label}')
    .required()
    .messages({
      'any.required': '{#label} is required',
    }),
  lastName: Joi.string()
    .label('Lastname')
    .pattern(/[a-zA-Z].*[a-zA-Z]/)
    .message('Please enter a valid {#label}')
    .required()
    .messages({
      'any.required': '{#label} is required',
    }),
  profilePicture: Joi.string().optional(),
  gender: Joi.string().valid('male', 'female', 'others').required().messages({
    'any.required': '{#label} is required',
    'any.only': '{#label} must be one of male,female,others',
  }),
  password: Joi.string()
    .label('Password')
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)
    .message('Please enter a strong {#label}')
    .messages({
      'any.required': '{#label} is required',
    }),
  status: Joi.string().label('Status').valid('ACTIVE', 'INACTIVE').messages({
    'any.required': '{#label} is required',
    'any.only': '{#label} must be one of ACTIVE or INACTIVE',
  }),
});

module.exports = UserValidation;
