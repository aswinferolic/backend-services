class Response {}

Response.success = (req, res, status, message, data) => {
  status = status ? status : 200;
  message = message ? message : 'Success';
  data = data ? data : undefined;

  let response = {
    status,
    message,
    data,
  };
  return res.status(status).json(response);
};

Response.error = (req, res, status, message, data) => {
  status = status ? status : 500;
  message = message ? message : 'Technical Error';
  data = data ? data : undefined;

  let response = {
    status,
    message,
    data,
  };

  return res.status(status).json(response);
};

module.exports = Response;
