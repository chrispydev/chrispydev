import blog from '../../../public/data/blog.json';

export default function hander(req, res) {
  try {
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
  }
}
