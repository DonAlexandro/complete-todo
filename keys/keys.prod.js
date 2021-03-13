module.exports = {
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT,
    baseUrl: process.env.BASE_URL,
    websiteEmail: process.env.WEBSITE_EMAIL,
    jwtSecret: process.env.JWT_SECRET,
    smtpHost: process.env.SMTP_EMAIL,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
}
