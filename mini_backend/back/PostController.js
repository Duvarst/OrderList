import Order from "./order.js";

class PostController {
  async create(req, res) {
    try {
      const { id, data, title, quantity, distance } = req.body;
      const order = await Order.create({ id, data, title, quantity, distance });
      res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const order = await Order.find();
      res.set({
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Credentials": true,
      });
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const order = await Order.findById(id);
      res.set({
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Credentials": true,
      });
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const order = req.body;
      if (!post._id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const updatedOrder = await Order.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const order = await Order.findByIdAndDelete();
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new PostController();
