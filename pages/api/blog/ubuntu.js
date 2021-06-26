import ubuntu from '../../../public/data/blog/ubuntu.json';

export default function hander(req, res) {
  try {
    res.status(200).json(ubuntu);
  } catch (error) {
    console.log(error);
  }
}
