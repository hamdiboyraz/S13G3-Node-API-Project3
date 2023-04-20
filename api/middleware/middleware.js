function logger(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  console.log(req.method);
  console.log(req.url);
  const timestamp = new Date().toLocaleString();
  console.log(timestamp);
  next();
}

function validateUserId(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  next();
}

function validateUser(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  next();
}

function validatePost(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  next();
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = { logger, validateUserId, validateUser, validatePost };
