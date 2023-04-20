const userController = require("../users/users-model");

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toLocaleString();
  console.log(`${method} -- ${url} -- ${timestamp}`);
  next();
}

async function validateUserId(req, res, next) {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const user = await userController.getById(id);
    if (!user) {
      return res.status(404).json({ message: "kullanıcı bulunamadı" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

function validateUser(req, res, next) {
  try {
    // console.log(req.body);
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "gerekli name alanı eksik",
      });
    }
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

function validatePost(req, res, next) {
  try {
    console.log(req.body);
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({
        message: "gerekli text alanı eksik",
      });
    }
    next();
  } catch (err) {}
  next(err);
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = { logger, validateUserId, validateUser, validatePost };
