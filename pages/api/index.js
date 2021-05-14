import portfolio from '../../public/data/portfolio.json';
// import portfolio from '../../data/portfolio.json';

export default function hander(req, res) {
  res.status(200).json(portfolio);
}
