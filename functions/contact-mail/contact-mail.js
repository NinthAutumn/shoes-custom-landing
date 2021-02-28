require('dotenv').config()

const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
        headers: {
          'Allow': 'POST'
        }
      }
    }
    const sgMail = require('@sendgrid/mail')
    const axios = require('axios');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const data = JSON.parse(event.body)
    if (!data['g-recaptcha-response']) return {
      statusCode: 200,
      body: JSON.stringify({
        "error": "Captcha 認証に失敗しました"
      }),
    }
    const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_KEY}&response=${data['g-recaptcha-response']}`)

    if (res.data) {
      console.log(res.data)
      if (res.data.success === 'undefined' || !res.data.success) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            "error": "Captcha 認証に失敗しました"
          }),
        }
      }
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({
          "error": "Captcha 認証に失敗しました"
        }),
      }
    }
    const msg = {
      to: 'arif.iwamoto@gmail.com', // Change to your recipient
      from: 'site@rio-ordershoes.com', // Change to your verified sender
      subject: 'Rio Shoes　お問い合わせ',
      // text: 'and easy to do anywhere, even with Node.js',
      html: `${Object.keys(data).reduce((acc,cur)=>{
        return acc += `<p>${cur}: ${data[cur]}</p>`
      },'')}`,
    }
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `success`
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}

module.exports = {
  handler
}
