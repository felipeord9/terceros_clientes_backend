const express = require("express");
const multer = require("multer");
const MailController = require("../../controllers/mailController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/send", upload.single("file"), MailController.sendMail);

module.exports = router;
