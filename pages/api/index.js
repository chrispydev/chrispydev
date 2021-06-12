import portfolio from '../../public/data/portfolio.json';

export default function hander(req, res) {
  try {
    res.status(200).json(portfolio);
  } catch (error) {
    console.log(error);
  }
}
