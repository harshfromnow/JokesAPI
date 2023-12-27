import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = 'https://v2.jokeapi.dev';

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const categoriesResponse = await axios.get(`${API_URL}/categories`);
    const categories = categoriesResponse.data.categories;

    res.render('index', { categories, joke: null, error: null });
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.render('index', { categories: [], joke: null, error: 'Failed to fetch categories' });
  }
});

app.get('/get-joke/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const jokeResponse = await axios.get(`${API_URL}/joke/${category}`);
    const joke = jokeResponse.data;

    res.render('index', { categories: [], joke, error: null });
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    res.render('index', { categories: [], joke: null, error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
