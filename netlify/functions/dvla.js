exports.handler = async (event) => {
  const { registrationNumber } = JSON.parse(event.body);
  const res = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 's0oOKyNu8Za7UWRyMVA4n79Mi0GGP6Db8zhbDQQF'
    },
    body: JSON.stringify({ registrationNumber })
  });
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
