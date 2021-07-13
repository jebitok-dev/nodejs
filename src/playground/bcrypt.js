const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = 'seattle';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('seattle', hashedPassword);
  console.log(isMatch);
};

myFunction();
