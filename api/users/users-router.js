const express = require("express");
const { validateUserId } = require("../middleware/middleware");

const usersController = require("./users-model");
const postsController = require("../posts/posts-model");

// `users-model.js` ve `posts-model.js` sayfalarına ihtiyacınız var
// ara yazılım fonksiyonları da gereklidir

const router = express.Router();

router.get("/", (req, res) => {
  // TÜM KULLANICILARI İÇEREN DİZİYİ DÖNDÜRÜN
  console.log("helloo");
});

router.get("/:id", validateUserId, (req, res) => {
  // USER NESNESİNİ DÖNDÜRÜN
  // user id yi getirmek için bir ara yazılım gereklidir
  console.log(req.params);
  console.log(req.user);
});

router.post("/", (req, res) => {
  // YENİ OLUŞTURULAN USER NESNESİNİ DÖNDÜRÜN
  // istek gövdesini doğrulamak için ara yazılım gereklidir.
});

router.put("/:id", validateUserId, (req, res) => {
  // YENİ GÜNCELLENEN USER NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan ara yazılım gereklidir
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
});

router.delete("/:id", validateUserId, (req, res) => {
  // SON SİLİNEN USER NESNESİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // USER POSTLARINI İÇEREN BİR DİZİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
});

router.post("/:id/posts", validateUserId, (req, res) => {
  // YENİ OLUŞTURULAN KULLANICI NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
});

// routerı dışa aktarmayı unutmayın
module.exports = router;
