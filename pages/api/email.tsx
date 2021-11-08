import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID);

async function sendEmail(req, res) {
  try {
    const response = await fetch(
      `https://hcaptcha.com/siteverify`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `response=${req.body.hcaptchaRef}&secret=${process.env.HCAPTCHA_SECRET}`,
        method: "POST",
      }
    );
    const captchaValidation = await response.json();
    /**
     * {
     *    "success": true|false,     // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
     *    "challenge_ts": timestamp, // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *    "hostname": string,        // the hostname of the site where the challenge was solved
     *    "credit": true|false,      // optional: whether the response will be credited
     *    "error-codes": [...]       // optional: any error codes
     *  }
     */
     if (captchaValidation.success) {
       console.log('captcha success')
      await sendgrid.send({
        to: "hello@hammadkhokhar.com", //verify your domain with sendgrid first
        from: "hello@hammadkhokhar.com",
        subject: `[Lead from website] : ${req.body.subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <body>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                <p>Subject:</p>
                <p>${req.body.subject}</p>
                <br>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
                </div>
                </div>
        </body>
        </html>`,
      });
      console.log('email sent from server.')
      return res
        .status(200)
        .json({ Success: "Email has been sent successfully." });
    }
    console.log('unprocessable entry.')
    return res.status(422).json({
      message: "Unproccesable request, Invalid captcha code",
    });

  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(500).json({ error: "Unknown error occurred." });
}

export default sendEmail;
