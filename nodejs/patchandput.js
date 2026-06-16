
const express = require('express');
const app = express();

app.use(express.json());

// Sample data
let user = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  age: 25
};

// GET user
app.get('/user', (req, res) => {
  res.json(user);
});

/*
PUT: Replace the entire resource
*/
app.put('/user/:id', (req, res) => {
  const { name, email, age } = req.body;

  user = {
    id: Number(req.params.id),
    name,
    email,
    age
  };

  res.json({
    message: 'User replaced successfully',
    user
  });
});

/*
PATCH: Update only specified fields
*/
app.patch('/user/:id', (req, res) => {
  user = {
    ...user,
    ...req.body
  };

  res.json({
    message: 'User updated successfully',
    user
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});