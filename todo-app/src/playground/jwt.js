const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = await jwt.sign({ _id: 'data1' }, 'lovepizza', { expiresIn: '3 days' });
  console.log(token);

  const data = await jwt.verify(token, 'lovepizza');
  console.log(data);
};
myFunction();
